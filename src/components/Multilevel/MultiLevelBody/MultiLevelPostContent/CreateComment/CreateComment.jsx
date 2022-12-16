import { useState } from 'react';
import { useCookies } from 'react-cookie';

// MUI Components
import { Box } from '@mui/system';

// services
import {
  convertToRaw, EditorState,
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
import { saveComment } from '../../CommentsList/commentsListServer';
import { AuthorLink } from '../../CommentsList/Comment/styles';

function CreateComment() {
  // Context
  const { post } = usePostContext();

  // Cookie
  const [cookies] = useCookies(['redditUser']);

  // States
  const [text, setText] = useState(EditorState.createEmpty());
  // const [readyToSave, setReadyToSave] = useState(false);

  // Constants
  const authorProfilelink = `/user/${cookies?.redditUser?.userName}`;

  const handleCommentTextChange = (text) => {
    // console.log(convertToRaw(text.getCurrentContent()));
    setText(text);
  };

  // console.log('text wl length', draftToHtml(convertToRaw(text.getCurrentContent())), draftToHtml(convertToRaw(text.getCurrentContent())).length);

  const comment = () => {
    if (saveComment(post?._id, 'Post', draftToHtml(convertToRaw(text.getCurrentContent())))) {
      setText(EditorState.createEmpty());

      // Need refresh post Component =>to pop comment
      // UpdatePost();
      // Refetch post
    }
  };

  return (
    <div>
      <Typography>
        Comment as
        {' '}
        <AuthorLink href={authorProfilelink}>{cookies?.redditUser?.userName}</AuthorLink>
      </Typography>

      <TextEditor
        handlePostTextChange={handleCommentTextChange}
        postText={text}
        commentPlaceholder
      />
      <Box m={2} gap={1} display="flex" justifyContent="flex-end">
        <SaveButton
          variant="contained"
          type="submit"
          onClick={comment}
          disabled={draftToHtml(convertToRaw(text.getCurrentContent())).length === 8}
        >
          Comment
        </SaveButton>
      </Box>
    </div>
  );
}

export default CreateComment;
