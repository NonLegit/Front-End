import { Typography } from '@mui/material';
import { useState } from 'react';
import { postReactionsServer } from '../../profileServer';

import {
  UpArrow, DownArrow, SidebarQueueBox, UpArrowFilled, DownArrowFilled,
} from './styles';
/**
 * sidebar of the post containing arrow up and down
 *
 * @component PostSidebar
 * @property {number} points -number of points.
 * @property {number} postVoteStatus -is the post is upvoted or sownvoted.
 * @returns {React.Component} PostSidebar
 */
function PostSide(props) {
  const { postid, points, postVoteStatus } = props;
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
    <SidebarQueueBox>
      {
        (status === '1') ? <UpArrowFilled onClick={() => { handleNoUpvote(); }} /> : <UpArrow onClick={() => { handleClickUp(); }} />
      }
      <Typography variant="caption" sx={{ fontWeight: 700 }}>{postPoints}</Typography>
      {
        (status === '-1') ? <DownArrowFilled onClick={() => { handleNoDownvote(); }} /> : <DownArrow onClick={() => { handleClickDown(); }} />
      }
    </SidebarQueueBox>
  );
}

export default PostSide;
