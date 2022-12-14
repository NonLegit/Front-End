import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import { useContext } from 'react';
import { UserContext } from '../../../../../../../contexts/UserProvider';

import { CommentText } from '../styles';
import { CommentsBoxHeader, Flair, TagPost } from './styles';

/**
 * Header of the comment
 *
 * @component CommentsHeader
 * @param {string} username - name of the currently loggedin user.
 * @property {string} subReddit -name of the subreddit in which is the comment.
 * @property {string} publisher -author of the comment.
 * @property {string} title -the title of a comment.
 * @returns {React.Component} CommentsHeader
 */

function CommentsHeader(props) {
  const { username } = useContext(UserContext);
  const {
    post, noheader,
  } = props;
  return (

    <CommentsBoxHeader noheader={noheader}>
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
        {post?.title}
        .
      </CommentText>
      {post?.spoiler && <TagPost color="#A4A7A8" variant="caption">spoiler</TagPost>}
      {/* check with baaaaaack */}
      {post?.nsfw && <TagPost color="#FF585B" variant="caption">nsfw</TagPost>}
      {
            post?.flairId?.text
            && (
            <Flair
              disableripple
              backgroundcolor={post?.flairId?.backgroundColor}
              flaircolor={post?.flairId?.textColor}
            >
              {post?.flairId?.text}
            </Flair>
            )
          }
      <CommentText variant="caption" coloring="black" hover="true" sx={{ fontWeight: 700 }}>
        {post?.ownerType === 'User' ? 'u/' : 'r/'}
        {post?.owner?.name}
        .
      </CommentText>
      <CommentText variant="caption" coloring="#787c7e">
        Posted by
      </CommentText>
      <CommentText variant="caption" coloring="#787c7e" hover="true">
        u/
        {post?.author?.name}
      </CommentText>
    </CommentsBoxHeader>

  );
}

export default CommentsHeader;
