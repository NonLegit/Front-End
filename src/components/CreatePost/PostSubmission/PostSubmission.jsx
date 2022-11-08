import { Box } from '@mui/material';
import RedditButton from '../../RedditButton/RedditButton';
import { PostButton } from './styles';
/**
 * This component contains post andn save draft buttons
 *
 * @component PostHeader
 * @property {function} handleSaveDraft -Hanlding save draft button
 * @property {function} handlePost -Hanlding post submitting
 * @property {boolean} readyToPost -Check whether the post button is disabled or not
 * @returns {React.Component} Container of buttons
 */

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
        data-testid="post button"
      >
        post
      </PostButton>
    </Box>
  );
}

export default PostSubmission;
