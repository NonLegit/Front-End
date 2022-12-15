import { useState } from 'react';
import { postReactionsServer } from '../../../../profileServer';
import {
  UpArrow, DownArrow, SidebarQueueBox, UpArrowFilled, DownArrowFilled, Number,
} from './styles';

/**
 * Sidebar of the post conatining arrow up and down
 *
 * @component PostSide
 * @property {number} points -number of votes on a post
 * @property {number} postVoteStatus -is the post upvoted or down voted or none
 * @returns {React.Component} PostSide
 */
function PostSide(props) {
  const {
    postid, points, postVoteStatus, spam,
  } = props;
  const [postPoints, setPostPoints] = useState(points);
  const [status, setStatus] = useState(postVoteStatus);

  const handleClickUp = () => {
    postReactionsServer(postid, 'vote', 1);
    if (status === '-1') setPostPoints(postPoints + 2);
    else setPostPoints(postPoints + 1);
    setStatus('1');
  };
  const handleClickDown = () => {
    postReactionsServer(postid, 'vote', -1);
    if (status === '1') setPostPoints(postPoints - 2);
    else setPostPoints(postPoints - 1);
    setStatus('-1');
  };
  const handleNoUpvote = () => {
    postReactionsServer(postid, 'vote', 0);
    setPostPoints(postPoints - 1);
    setStatus('0');
  };
  const handleNoDownvote = () => {
    postReactionsServer(postid, 'vote', 0);
    setPostPoints(postPoints + 1);
    setStatus('0');
  };

  return (
    <SidebarQueueBox condition={spam?.toString()}>
      {
        (status === '1') ? <UpArrowFilled onClick={() => { handleNoUpvote(); }} /> : <UpArrow onClick={() => { handleClickUp(); }} />
      }
      <Number variant="caption" sx={{ fontWeight: 700 }}>{postPoints}</Number>
      {
        (status === '-1') ? <DownArrowFilled onClick={() => { handleNoDownvote(); }} /> : <DownArrow onClick={() => { handleClickDown(); }} />
      }
    </SidebarQueueBox>
  );
}

export default PostSide;
