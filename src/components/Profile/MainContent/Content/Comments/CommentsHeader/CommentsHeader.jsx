import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import { useContext } from 'react';
import { UserContext } from '../../../../../../contexts/UserProvider';

import { CommentText } from '../styles';
import CommentsBoxHeader from './styles';

/**
 * Header of the comment
 *
 * @component CommentsHeader
 * @param {string} username - name of the currently loggedin user.
 * @property {string} subReddit -name of the subreddit in which is the comment.
 * @property {string} publisher -creator of the comment.
 * @property {string} title -the title of a comment.
 * @returns {React.Component} CommentsHeader
 */

function CommentsHeader(props) {
  const { username } = useContext(UserContext);
  const {
    subReddit, publisher, title,
  } = props;
  return (

    <CommentsBoxHeader>
      <ChatBubbleOutlineOutlinedIcon />
      <CommentText
        variant="caption"
        hover="true"
      >
        {username}

      </CommentText>
      <CommentText variant="caption" coloring="#787c7e">
        commented on
        {' '}
        {title}
        {' '}
        .
      </CommentText>
      <CommentText variant="caption" coloring="black" hover="true" sx={{ fontWeight: 700 }}>
        u/
        {subReddit}
        {' '}
        .
      </CommentText>
      <CommentText variant="caption" coloring="#787c7e">
        Posted by
      </CommentText>
      <CommentText variant="caption" coloring="#787c7e" hover="true">
        {publisher}
      </CommentText>
    </CommentsBoxHeader>

  );
}

export default CommentsHeader;
