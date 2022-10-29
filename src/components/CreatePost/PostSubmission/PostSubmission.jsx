import { Box } from '@mui/material';
import RedditButton from '../../RedditButton/RedditButton';

function PostSubmission(props) {
  const { handleSaveDraft, handlePost } = props;
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
  );
}

export default PostSubmission;
