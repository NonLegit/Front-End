import {
  Box, Divider, Typography,
} from '@mui/material';

import { useState } from 'react';

import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import PostAddOutlinedIcon from '@mui/icons-material/PostAddOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import AttachFileIcon from '@mui/icons-material/AttachFile';

import RedditButton from '../../RedditButton/RedditButton';

import {
  FormContainer, Title, TitleContainer, DraftsButton, Badge, CustomDivider, PostFormContainer, FieldsContainer, PostTitle, PostText, OptionButton, OCHelperText, CustomTab, CustomTabs, PostMediaContainer, UploadButton, PostUrl,
} from './styles';

function CreatePostForm() {
  const [title, setTitle] = useState('');
  const [postText, setPostTitle] = useState();
  const [postMedia, setPostMedia] = useState([]);
  const [postUrl, setPostUrl] = useState('');
  const [OC, setOC] = useState(false);
  const [postType, setPostType] = useState(0);
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
    console.log(e.target.files);
    const files = Array.from(e.target.files).map((file) => URL.createObjectURL(file));
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
        <CustomTabs value={postType} onChange={handlePostType}>
          <CustomTab icon={<PostAddOutlinedIcon />} iconPosition="start" label="post" value={0} />
          <Divider orientation="vertical" flexItem light />
          <CustomTab icon={<ImageOutlinedIcon />} iconPosition="start" label="images & videos" value={1} />
          <Divider orientation="vertical" flexItem light />
          <CustomTab icon={<AttachFileIcon sx={{ transform: 'rotate(45deg)' }} />} iconPosition="start" label="link" value={2} />
        </CustomTabs>
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
            <PostMediaContainer>
              <Typography>
                Drag and drop images or
              </Typography>
              <UploadButton
                component="label"
                variant="outlined"
              >
                upload
                <input
                  hidden
                  accept="video/*,image/*"
                  multiple
                  type="file"
                  onChange={handlePostMedia}
                />
              </UploadButton>
              {postMedia.map((media) => (<img key={media} src={media} width={100} alt="" />))}
            </PostMediaContainer>
          ) : null}
          {postType === 2 ? (
            <PostUrl
              placeholder="Url"
              value={postUrl}
              onChange={handleUrlChange}
              onKeyDown={handleUrlEnter}
            />
          ) : null}
          <Box display="flex" mb={2} gap={1}>
            <OptionButton
              color={(OC ? 'secondary' : 'third')}
              variant={(OC ? 'contained' : 'outlined')}
              padding="3px 16px"
              fontSize={14}
              fontWeight="bold"
              onClick={handleOC}
            >
              {OC ? (
                <CheckIcon sx={{
                  fontSize: 27,
                  marginRight: 0.6,
                }}
                />
              ) : (
                <AddIcon
                  sx={{
                    fontSize: 27,
                    marginRight: 0.6,
                  }}
                />
              )}
              OC
            </OptionButton>
            <OptionButton
              color="third"
              variant="outlined"
              padding="3px 16px"
              fontSize={14}
              fontWeight="bold"
            >
              <AddIcon
                sx={{
                  fontSize: 27,
                  marginRight: 0.6,
                }}
              />
              spoiler
            </OptionButton>
            <OptionButton
              color="third"
              variant="outlined"
              padding="3px 16px"
              fontSize={14}
              fontWeight="bold"
            >
              <AddIcon
                sx={{
                  fontSize: 27,
                  marginRight: 0.6,
                }}
              />
              NSFW
            </OptionButton>
            <OptionButton
              color="third"
              variant="outlined"
              padding="3px 16px"
              fontSize={14}
              fontWeight="bold"
              disabled
            >
              <LocalOfferOutlinedIcon
                sx={{
                  marginRight: 1,
                  transform: 'scalex(-1)',
                }}
              />
              flair
              <KeyboardArrowDownOutlinedIcon />
            </OptionButton>
          </Box>
          {OC ? (
            <OCHelperText>
              Use the OC tag if you want to take credit for your post as Original Content.
            </OCHelperText>
          ) : null}
          <Divider />
          <Box my={2} gap={1} display="flex" justifyContent="flex-end">
            <RedditButton
              variant="outlined"
              padding="3px 16px"
              fontSize={14}
              fontWeight="bold"
              type="submit"
              onClick={handleSaveDraft}
            >
              save draft
            </RedditButton>
            <RedditButton
              variant="contained"
              padding="3px 16px"
              fontSize={14}
              fontWeight="bold"
              type="submit"
              onClick={handlePost}
            >
              post
            </RedditButton>
          </Box>
        </FieldsContainer>
      </PostFormContainer>
    </FormContainer>
  );
}

export default CreatePostForm;
