import { useState } from 'react';

// MUI Components
import { Box } from '@mui/system';

// services
import {
  // eslint-disable-next-line no-unused-vars
  convertToRaw, EditorState, ContentState, convertFromHTML,
} from 'draft-js';
import draftToHtml from 'draftjs-to-html';

// components
import { Typography } from '@mui/material';
import TextEditor from '../../../../CreatePost/CreatePostContainer/CreatePostForm/TextEditor/TextEditor';

// Context
import { usePostContext } from '../../../../../contexts/PostContext';

// Styles
import { SaveButton } from '../styles';

// Server
import { saveComment } from './createCommentServer';

function CreateComment() {
  // Context
  const { post } = usePostContext();

  // States
  const [text, setText] = useState(EditorState.createEmpty());
  const [readyToSave, setReadyToSave] = useState(false);

  const handleCommentTextChange = (text) => {
    // if (text.length() < 0) {
    //   setReadyToSave(false);
    //   return;
    // }
    // ==>Handle @
    setReadyToSave(true);
    setText(text);
  };

  const comment = () => {
    if (saveComment(post?._id, 'Post', draftToHtml(convertToRaw(text.getCurrentContent())))) {
      setText(EditorState.createEmpty());

      // Need refresh post Component =>to pop comment
      // UpdatePost();
    }
  };

  return (
    <div>
      <Typography>Comment as BasmaElhoseny01</Typography>
      <TextEditor handlePostTextChange={handleCommentTextChange} postText={text} />
      <Box m={2} gap={1} display="flex" justifyContent="flex-end">
        <SaveButton
          variant="contained"
          type="submit"
          onClick={comment}
          disabled={!readyToSave}
        >
          Comment
        </SaveButton>
      </Box>
    </div>
  );
}

export default CreateComment;
