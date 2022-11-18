import { useState } from 'react';
import {
  UpArrow, DownArrow, SidebarQueueBox, UpArrowFilled, DownArrowFilled, Number,
} from './styles';

/**
 * Sidebar of the post conatining arrow up and down
 *
 * @component OtherProfilePostSide
 * @property {number} points -number of votes on a post
 * @property {number} postVoteStatus -is the post upvoted or down voted or none
 * @returns {React.Component} OtherProfilePostSide
 */
function OtherProfilePostSide(props) {
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
      <Number variant="caption" sx={{ fontWeight: 700 }}>{postPoints}</Number>
      {
        (postVoteStatus === '-1') ? <DownArrowFilled onClick={() => { handleClickUp(); }} /> : <DownArrow onClick={() => { handleClickDown(); }} />
      }
    </SidebarQueueBox>
  );
}

export default OtherProfilePostSide;
