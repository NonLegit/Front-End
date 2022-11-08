import { Box } from '@mui/material';
import RedditButton from '../../RedditButton/RedditButton';
import { PostButton } from './styles';

function PostSubmission(props) {
  const { handleSaveDraft, handlePost, readyToPost } = props;
  return (
    <Box m={2} gap={1} display="flex" justifyContent="flex-end">
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
      <PostButton
        variant="contained"
        type="submit"
        onClick={handlePost}
        disabled={!readyToPost}
      >
        post
      </PostButton>
    </Box>
  );
}

export default PostSubmission;
