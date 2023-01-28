import { useEffect, useState } from 'react';

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

/**
 * EditPost Text Editor to Edit Content of a post
 * @property {setFunction}setEdit --To set(Toggle State of Editing Post on clickling save or cancel)
 * @returns {React.Component} --EditPost Component
 *
 */
function EditPost({ setEdit }) {
  // Context
  const { post, setPost } = usePostContext();

  useEffect(() => {
    console.log('EditPost.jsx');
  }, []);

  // States
  const [text, setText] = useState(post?.text || '');
  const [readyToSave, setReadyToSave] = useState(false);

  const handlePostTextChange = (text) => {
    setReadyToSave(true);
    setText(text);
  };

  const cancel = () => {
    setEdit(false);
    console.log('cancel');
  };

  const save = () => {
    // console.log('save');
    // console.log(post);
    editPost(post?._id, text, setPost);
    setEdit(false);
  };

  return (
    <div>
      <TextEditor handlePostTextChange={handlePostTextChange} postText={text} Edit id="edit" />
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
