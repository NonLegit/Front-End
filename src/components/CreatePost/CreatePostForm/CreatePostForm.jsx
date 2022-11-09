import {
  Box, Divider,
} from '@mui/material';

import { useState } from 'react';

import {
  FormContainer, Title, TitleContainer, DraftsButton, Badge, CustomDivider, PostFormContainer, FieldsContainer, PostTitle, PostText, PostUrl,
} from './styles';

import PostMedia from '../PostMedia/PostMedia';
import PostTags from '../PostTags/PostTags';
import PostSubmission from '../PostSubmission/PostSubmission';
import PostTypes from '../PostTypes/PostTypes';
import SubredditsMenu from '../SubredditsMenu/SubredditsMenu';

import axios from '../../../services/instance';
import { usePostTypeContext } from '../../../contexts/PostTypeContext';
/**
 * This component is the main section off create post page which holds the form to submit posts
 *
 * @component CreatePostForm
 * @returns {React.Component} CreatePostForm
 */

function CreatePostForm() {
  // contexts
  const { initialPostType } = usePostTypeContext();

  // variables
  const postTypes = ['text', 'media', 'url'];

  // states
  const [postMedia, setPostMedia] = useState([]);
  const [activeMediaFile, setActiveMediaFile] = useState(postMedia.length - 1);
  const [title, setTitle] = useState('');
  const [postText, setPostTitle] = useState();
  const [postUrl, setPostUrl] = useState('');
  const [postType, setPostType] = useState(initialPostType);
  const [communityToPostIn, setCommunityToPostIn] = useState(null);
  const [ownerType, setOwnerType] = useState(null);
  const [spoiler, setSpoiler] = useState(false);
  const [nswf, setNswf] = useState(false);
  const [sendReplies, setSendReplies] = useState(true);

  const handleSendReplies = (e) => {
    setSendReplies(e.target.checked);
  };
  // handlers
  const handlePost = (e) => {
    e.preventDefault();
    console.log(title, postText, postTypes[postType], communityToPostIn, ownerType, spoiler, nswf, sendReplies);
    const post = {
      title,
      text: postText,
      kind: postTypes[postType],
      owner: communityToPostIn,
      ownerType,
      spoiler,
      nswf,
      sendReplies,
    };
    axios.post('/posts', JSON.stringify(post)).then((response) => {
      console.log(response.data);
      alert('posted successfully');
    }).catch((e) => {
      console.log(e);
      alert('somethig went wrong');
    });
  };
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handlePostTextChange = (e) => {
    setPostTitle(e.target.value);
  };
  const handleSaveDraft = (e) => {
    e.preventDefault();
  };
  const handlePostType = (e, newPostType) => {
    setPostType(newPostType);
  };
  const handleUrlChange = (e) => {
    setPostUrl(e.target.value);
  };
  const handleUrlEnter = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };
  const handlePostMedia = (e) => {
    const files = Array.from(e.target.files).map((file) => ({ src: URL.createObjectURL(file), caption: '', link: '' }));
    setActiveMediaFile(postMedia.length + files.length - 1);
    setPostMedia([...postMedia, ...files]);
  };
  const hanldeSpoiler = () => {
    setSpoiler(!spoiler);
  };

  const hanldeNsfw = () => {
    setNswf(!nswf);
  };

  return (
    <FormContainer>
      <TitleContainer my={2}>
        <Title variant="h6">
          Create a post
        </Title>
        <DraftsButton color="third" padding="4px 16px" fontSize={12} fontWeight="bold">
          drafts
          <Badge>
            0
          </Badge>
        </DraftsButton>
      </TitleContainer>
      <CustomDivider />
      <SubredditsMenu
        setCommunityToPostIn={setCommunityToPostIn}
        setOwnerType={setOwnerType}
      />
      <PostFormContainer>
        <PostTypes postType={postType} handlePostType={handlePostType} />
        <FieldsContainer>
          <Box position="relative" display="flex" flexDirection="column">
            <PostTitle
              type="text"
              placeholder="Title"
              value={title}
              onChange={handleTitleChange}
            />
          </Box>
          {postType === 0 ? (
            <PostText
              placeholder="Text(optional)"
              value={postText}
              onChange={handlePostTextChange}
            />
          ) : null}
          {postType === 1 ? (
            <PostMedia
              handlePostMedia={handlePostMedia}
              postMedia={postMedia}
              setPostMedia={setPostMedia}
              activeMediaFile={activeMediaFile}
              setActiveMediaFile={setActiveMediaFile}
            />
          ) : null}
          {postType === 2 ? (
            <PostUrl
              placeholder="Url"
              value={postUrl}
              onChange={handleUrlChange}
              onKeyDown={handleUrlEnter}
            />
          ) : null}
        </FieldsContainer>
        <PostTags
          spoiler={spoiler}
          hanldeSpoiler={hanldeSpoiler}
          nswf={nswf}
          hanldeNsfw={hanldeNsfw}
        />
        <Divider />
        <PostSubmission
          handleSaveDraft={handleSaveDraft}
          handlePost={handlePost}
          readyToPost={communityToPostIn != null && title}
          handleSendReplies={handleSendReplies}
          sendReplies={sendReplies}
        />
      </PostFormContainer>
    </FormContainer>
  );
}

export default CreatePostForm;
