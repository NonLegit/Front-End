import { Box, Divider } from '@mui/material';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import RedditButton from '../../RedditButton/RedditButton';
import {
  FormContainer, Title, TitleContainer, DraftsButton, Badge, CustomDivider, PostFormContainer, FieldsContainer, PostTitle, PostText, OptionButton, OCHelperText,
} from './styles';

function CreatePostForm() {
  const [title, setTitle] = useState('');
  const [postText, setPostTitle] = useState('');
  const [OC, setOC] = useState(false);
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handlePostTextChange = (e) => {
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
    // console.log(OC);
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
        <FieldsContainer>
          <Box position="relative" display="flex" flexDirection="column">
            <PostTitle
              type="text"
              placeholder="Title"
              value={title}
              onChange={handleTitleChange}
            />
          </Box>
          <PostText
            cols="30"
            rows="10"
            placeholder="Text(optional)"
            value={postText}
            onChange={handlePostTextChange}
          />
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
