import { useEffect, useState } from 'react';

// MUI Components
import { Box } from '@mui/material';

// Components
import TextEditor from '../../../../../CreatePost/CreatePostContainer/CreatePostForm/TextEditor/TextEditor';
import RedditButton from '../../../../../RedditButton/RedditButton';

// Contexts
// import { usePostContext } from '../../../../../contexts/PostContext';

// Styles
import { SaveButton } from '../../../MultiLevelPostContent/styles';

// Server
import { editComment } from './editCommentServer';

/**
 * Edit Comment (Text Editor) Component
 * @property {object}comment --Comment Assoicated with these Actions
 * @property {setfunction}setComment --Setting the comment on change of its State (Renreder)
 * @property {setfunction}setEditComment --set function for the Edit state of the comment (for UI)
 * @returns {React.Component} --EditComment Component
 */
function EditComment(props) {
  // Props
  const { comment, setComment, setEditComment } = props;

  useEffect(() => {
    console.log('EditComment.jsx');
  }, []);

  // States
  const [text, setText] = useState(comment?.text || '');
  const [readyToSave, setReadyToSave] = useState(false);

  const handlePostTextChange = (text) => {
    setReadyToSave(true);
    setText(text);
  };

  const cancel = () => {
    setEditComment(false);
    console.log('cancel');
  };

  const save = () => {
    console.log('save');
    console.log(comment);
    editComment(comment?._id, text, setComment);
    setEditComment(false);
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

export default EditComment;
