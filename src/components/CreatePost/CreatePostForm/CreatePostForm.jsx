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

function CreatePostForm() {
  // states
  const [title, setTitle] = useState('');
  const [postText, setPostTitle] = useState();
  const [postMedia, setPostMedia] = useState([]);
  const [postUrl, setPostUrl] = useState('');
  const [OC, setOC] = useState(false);
  const [postType, setPostType] = useState(0);
  const [activeMediaFile, setActiveMediaFile] = useState(postMedia.length - 1);

  // handlers
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    // console.log(36727);
  };
  const handlePostTextChange = (e) => {
    // console.log(e.target.value);
    setPostTitle(e.target.value);
  };
  const handlePost = (e) => {
    e.preventDefault();
  };
  const handleSaveDraft = (e) => {
    e.preventDefault();
  };
  const handleOC = () => {
    setOC(!OC);
  };
  const handlePostType = (e, newPostType) => {
    // console.log(newPostType);
    setPostType(newPostType);
  };
  const handleUrlChange = (e) => {
    setPostUrl(e.target.value);
    // console.log(e);
  };
  const handleUrlEnter = (e) => {
    // console.log(e);
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };
  const handlePostMedia = (e) => {
    // console.log(e.target.files);
    const files = Array.from(e.target.files).map((file) => ({ src: URL.createObjectURL(file), caption: '', link: '' }));
    setActiveMediaFile(postMedia.length + files.length - 1);
    setPostMedia([...postMedia, ...files]);
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
        <PostTags OC={OC} handleOC={handleOC} />
        <Divider />
        <PostSubmission handleSaveDraft={handleSaveDraft} handlePost={handlePost} />
      </PostFormContainer>
    </FormContainer>
  );
}

export default CreatePostForm;
