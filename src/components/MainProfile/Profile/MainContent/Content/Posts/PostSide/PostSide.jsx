import { Typography } from '@mui/material';
import { useState } from 'react';
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
  const { points, postVoteStatus } = props;
  const [postPoints, setPostPoints] = useState(points);
  const handleClickUp = () => {
    setPostPoints(postPoints + 1);
  };
  const handleClickDown = () => {
    setPostPoints(postPoints - 1);
  };

  return (
    <SidebarQueueBox>
      {
        (postVoteStatus === '1') ? <UpArrowFilled onClick={() => { handleClickDown(); }} /> : <UpArrow onClick={() => { handleClickUp(); }} />
      }
      <Typography variant="caption" sx={{ fontWeight: 700 }}>{postPoints}</Typography>
      {
        (postVoteStatus === '-1') ? <DownArrowFilled onClick={() => { handleClickUp(); }} /> : <DownArrow onClick={() => { handleClickDown(); }} />
      }
    </SidebarQueueBox>
  );
}

export default PostSide;
