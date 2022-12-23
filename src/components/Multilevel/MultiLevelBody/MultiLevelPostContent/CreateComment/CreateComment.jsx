import { useState } from 'react';
import { useCookies } from 'react-cookie';

// MUI Components
import { Box } from '@mui/system';

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

/**
 * CreateComment Text Editor to Add comment on a post
 * @returns {React.Component} --CreateComment Component
 */
function CreateComment() {
  // Context
  const {
    post, setPost, comments, setComments,
  } = usePostContext();

  // Cookie
  const [cookies] = useCookies(['redditUser']);

  // States
  const [text, setText] = useState('');
  const [readyToSave, setReadyToSave] = useState(false);

  // Constants
  const authorProfilelink = `/user/${cookies?.redditUser?.userName}`;

  const handleCommentTextChange = (text) => {
    setReadyToSave(true);
    console.log('hhhh', text);
    setText(text);
  };

  // console.log('text wl length', draftToHtml(convertToRaw(text.getCurrentContent())), draftToHtml(convertToRaw(text.getCurrentContent())).length);

  const comment = () => {
    console.log('Bosy');
    if (saveComment(post?._id, 'Post', text, post, setPost, comments, setComments)) {
      setText('');

      // Need refresh post Component =>to pop comment
      // UpdatePost();
      // Refetch post
    }
  };

  return (
    <div>
      <Typography fontSize="12px">
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
          disabled={!readyToSave}
        >
          Comment
        </SaveButton>
      </Box>
    </div>
  );
}

export default CreateComment;
