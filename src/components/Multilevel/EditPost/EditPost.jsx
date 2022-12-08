// MUI Components
import { Box } from '@mui/material';

// Components
import { PostText } from '../../CreatePost/CreatePostContainer/CreatePostForm/styles';
import RedditButton from '../../RedditButton/RedditButton';

// Styles
import { SaveButton } from './styles';

function EditPost() {
  return (
    <div>
      EditPost
      <PostText
        placeholder="Text(optional)"
        // value={postText}
        // onChange={handlePostTextChange}
      />
      <Box m={2} gap={1} display="flex" justifyContent="flex-end">
        <RedditButton
          padding="3px 16px"
          fontSize={14}
          fontWeight="bold"
          type="submit"
        >
          Cancel
        </RedditButton>
        <SaveButton
          variant="contained"
          type="submit"
        >
          Save
        </SaveButton>
      </Box>
    </div>
  );
}

export default EditPost;
