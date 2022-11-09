import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import { useContext } from 'react';
/* eslint-disable import/no-cycle */
import { UserContext } from '../../../../../../context/UserProvider';

import { CommentText } from '../styles';
import CommentsBoxHeader from './styles';

/**
 * the header of an comment
 * @return {React.Component} - CommentsHeader
 * @param {string} username - name of the currently loggedin user
 */
function CommentsHeader(props) {
  const {
    username,
  } = useContext(UserContext);
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
