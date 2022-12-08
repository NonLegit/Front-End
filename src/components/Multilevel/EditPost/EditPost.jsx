import { useState } from 'react';

// services
import {
  // eslint-disable-next-line no-unused-vars
  convertToRaw, EditorState, ContentState, convertFromHTML,
} from 'draft-js';

// MUI Components
import { Box } from '@mui/material';

// Components
import TextEditor from '../../CreatePost/CreatePostContainer/CreatePostForm/TextEditor/TextEditor';
import RedditButton from '../../RedditButton/RedditButton';

// Styles
import { SaveButton } from './styles';

// draftToHtml(convertToRaw(postText.getCurrentContent()))
function EditPost() {
  const [text, setText] = useState(EditorState.createWithContent(ContentState.createFromBlockArray(
    convertFromHTML('<p>Basma.</p>'),
  )));

  const handlePostTextChange = (text) => {
    setText(text);
  };
  return (
    <div>
      EditPost
      <TextEditor handlePostTextChange={handlePostTextChange} postText={text} Edit />
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
