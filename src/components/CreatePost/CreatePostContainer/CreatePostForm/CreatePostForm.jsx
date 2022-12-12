import {
  Box, Divider,
} from '@mui/material';
import '../../../../styles/theme/textEditor.css';
import { useState, useEffect } from 'react';

import draftToHtml from 'draftjs-to-html';
import { convertToRaw, EditorState } from 'draft-js';

import { useNavigate, useParams } from 'react-router-dom';
import {
  FormContainer, Title, TitleContainer, DraftsButton, Badge, CustomDivider, PostFormContainer, FieldsContainer, PostTitle, PostUrl, WordCounter,
} from './styles';
import PostMedia from './PostMedia/PostMedia';
import PostTags from './PostTags/PostTags';
import PostSubmission from './PostSubmission/PostSubmission';
import PostTypes from './PostTypes/PostTypes';
import SubredditsMenu from './SubredditsMenu/SubredditsMenu';

import { usePostTypeContext } from '../../../../contexts/PostTypeContext';
import submitPostServer from './submitPostServer';
import currentSubredditServer from './currentSubredditServer';
import TextEditor from './TextEditor/TextEditor';

/**
 * This component is the main section off create post page which holds the form to submit posts
 *
 * @component CreatePostForm
 * @returns {React.Component} CreatePostForm
 */

function CreatePostForm() {
  // routes
  const { subredditName } = useParams();
  const navigate = useNavigate();
  // console.log(subredditName);

  // server
  const [subredditId, subredditIcon, initialOwnerType] = currentSubredditServer(subredditName);
  // console.log('component', subredditId, subredditIcon, subredditName);

  // contexts
  const { initialPostType } = usePostTypeContext();

  // variables
  const postTypes = ['self', 'image', 'video', 'url'];

  // states
  const [postMedia, setPostMedia] = useState([]);
  const [activeMediaFile, setActiveMediaFile] = useState(postMedia.length - 1);
  const [title, setTitle] = useState('');
  const [postText, setPostText] = useState(EditorState.createEmpty());
  const [postUrl, setPostUrl] = useState('');
  const [postType, setPostType] = useState(initialPostType);
  const [communityToPostIn, setCommunityToPostIn] = useState(subredditId);
  const [ownerType, setOwnerType] = useState(initialOwnerType);
  const [spoiler, setSpoiler] = useState(false);
  const [nswf, setNswf] = useState(false);
  const [sendReplies, setSendReplies] = useState(true);
  const [flair, setFlair] = useState(null);
  const [communityName, setCommunityName] = useState(subredditName);
  // console.log('title', title);
  // console.log('community to post in', communityToPostIn);

  useEffect(() => {
    setCommunityToPostIn(subredditId);
  }, [subredditId]);
  /**
   * This function check if server should send email to user as a reply to the post
   */
  const handleSendReplies = (e) => {
    setSendReplies(e.target.checked);
  };
  // handlers

  /**
   * This function send post request to create post
   */
  const handlePost = (e) => {
    e.preventDefault();
    const post = {
      title,
      text: draftToHtml(convertToRaw(postText.getCurrentContent())),
      kind: postTypes[postType],
      owner: communityToPostIn,
      ownerType,
      spoiler,
      nswf,
      sendReplies,
      flairId: flair?.id,
      flairText: flair?.text,
    };
    // console.log(post);
    submitPostServer(post, navigate, postType, postMedia);
  };
  /**
   * This function handles title change
   */
  const handleTitleChange = (e) => {
    setTitle(e.target.value.substr(0, Math.min(300, e.target.value.length)));
  };
  /**
   * This function handles post text change
   */
  // if (postText) { console.log(draftToHtml(convertToRaw(postText.getCurrentContent()))); }

  const handlePostTextChange = (editorState) => {
    setPostText(editorState);
  };
  const handleSaveDraft = (e) => {
    e.preventDefault();
  };
  /**
   * This function handles post type change
   */
  const handlePostType = (e, newPostType) => {
    setPostType(newPostType);
  };
  /**
   * This function handles post url change
   */
  const handleUrlChange = (e) => {
    setPostUrl(e.target.value);
  };
  /**
   * This function prevents user from type Enter in input fields
   */
  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };
  const handlePostMedia = (e) => {
    console.log('ahmed sayed zizo', e.target.files);
    setPostType(e.target.files[0].type.substr(0, 5) === 'video' ? 2 : 1);
    const files = Array.from(e.target.files).map((file) => ({
      src: URL.createObjectURL(file),
      caption: '',
      link: '',
      file,
      fileName: file.name,
    }));
    setActiveMediaFile(postMedia.length + files.length - 1);
    setPostMedia([...postMedia, ...files]);
  };
  console.log(postMedia);
  /**
   * This function handles if post is spoiler or not
   */
  const hanldeSpoiler = () => {
    setSpoiler(!spoiler);
  };
  /**
   * This function handles if post is not safe for work or not
   */
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
        subredditIcon={subredditIcon}
        subredditName={subredditName}
        ownerType={ownerType}
        communityName={communityName}
        setCommunityName={setCommunityName}
        setFlair={setFlair}
      />
      <PostFormContainer>
        <PostTypes
          postType={postType}
          handlePostType={handlePostType}
        />
        <FieldsContainer>
          <Box
            position="relative"
            display="flex"
            flexDirection="column"
            marginBottom={2}
          >
            <PostTitle
              type="text"
              placeholder="Title"
              value={title}
              onChange={handleTitleChange}
              onKeyDown={handleEnter}
            />
            <WordCounter>
              {title.length}
              /300
            </WordCounter>
          </Box>
          {postType === 0 ? (
            <TextEditor
              handlePostTextChange={handlePostTextChange}
              postText={postText}
            />
          ) : null}
          {(postType === 1 || postType === 2) ? (
            <PostMedia
              handlePostMedia={handlePostMedia}
              postMedia={postMedia}
              setPostMedia={setPostMedia}
              activeMediaFile={activeMediaFile}
              setActiveMediaFile={setActiveMediaFile}
              availableType={postType === 1 ? 'image' : 'video'}
            />
          ) : null}
          {postType === 3 ? (
            <PostUrl
              placeholder="Url"
              value={postUrl}
              onChange={handleUrlChange}
              onKeyDown={handleEnter}
            />
          ) : null}
        </FieldsContainer>
        <PostTags
          spoiler={spoiler}
          hanldeSpoiler={hanldeSpoiler}
          nswf={nswf}
          hanldeNsfw={hanldeNsfw}
          setFlair={setFlair}
          subreddit={communityToPostIn}
          flair={flair}
          communityName={communityName}
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
