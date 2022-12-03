import { useState } from 'react';
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
  const { points, postVoteStatus, spam } = props;
  const [postPoints, setPostPoints] = useState(points);

  console.log(spam);
  const handleClickUp = () => {
    setPostPoints(postPoints + 1);
  };
  const handleClickDown = () => {
    setPostPoints(postPoints - 1);
  };
  return (
    <SidebarQueueBox condition={spam.toString()}>
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

export default PostSide;
