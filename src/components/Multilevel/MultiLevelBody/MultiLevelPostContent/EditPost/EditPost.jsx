import { useState } from 'react';

// services
import {
  // eslint-disable-next-line no-unused-vars
  convertToRaw, EditorState, ContentState, convertFromHTML,
} from 'draft-js';
import draftToHtml from 'draftjs-to-html';
// draftToHtml(convertToRaw(postText.getCurrentContent()))

// MUI Components
import { Box } from '@mui/material';

// Components
import TextEditor from '../../../../CreatePost/CreatePostContainer/CreatePostForm/TextEditor/TextEditor';
import RedditButton from '../../../../RedditButton/RedditButton';

// Contexts
import { usePostContext } from '../../../../../contexts/PostContext';

// Styles
import { SaveButton } from '../styles';

// Server
import { editPost } from './editPostServer';

function EditPost() {
  // Context
  const { post, setPost } = usePostContext();

  // States
  const [text, setText] = useState(EditorState.createWithContent(ContentState.createFromBlockArray(
    convertFromHTML(post?.text),
  )));
  const [readyToSave, setReadyToSave] = useState(false);

  const handlePostTextChange = (text) => {
    setReadyToSave(true);
    setText(text);
    // console.log(draftToHtml(convertToRaw(text.getCurrentContent())));
  };

  const cancel = () => {
    console.log('cancel');
  };

  const save = () => {
    // console.log('save');
    // console.log(post);
    editPost(post?._id, draftToHtml(convertToRaw(text.getCurrentContent())), setPost);
  };

  return (
    <div>
      <TextEditor handlePostTextChange={handlePostTextChange} postText={text} Edit />
      <Box m={2} gap={1} display="flex" justifyContent="flex-end">
        <RedditButton
          padding="3px 16px"
          fontSize={14}
          fontWeight="bold"
          type="submit"
          onClick={cancel}
        >
          Cancel
        </RedditButton>

        <SaveButton
          variant="contained"
          type="submit"
          onClick={save}
          disabled={!readyToSave}
        >
          Save
        </SaveButton>
      </Box>
    </div>
  );
}

export default EditPost;
