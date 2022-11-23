import { useState } from 'react';
import {
  DownArrow,
  DownArrowFilled,
  Number, UpArrow, UpArrowFilled, Votes,
} from './styles';

/**
 * the upvoted and downvoted arrows in responsive postfooter
 *
 * @component ArrowList
 * @property {number} points - get number of upvotes or downvotes on a post
 * @property {number} postVoteStatus - get if the post is upvoted or downvoted or none
 * @returns {React.Component} ArrowList
 */
function ArrowList(props) {
  const { points, postVoteStatus } = props;
  const [postPoints, setPostPoints] = useState(points);

  const handleClickUp = () => {
    setPostPoints(postPoints + 1);
  };
  const handleClickDown = () => {
    setPostPoints(postPoints - 1);
  };
  return (
    <Votes>
      {
        (postVoteStatus === '1') ? <UpArrowFilled onClick={() => { handleClickDown(); }} /> : <UpArrow onClick={() => { handleClickUp(); }} />
      }
      <Number variant="caption" sx={{ fontWeight: 700 }}>{postPoints}</Number>
      {
        (postVoteStatus === '-1') ? <DownArrowFilled onClick={() => { handleClickUp(); }} /> : <DownArrow onClick={() => { handleClickDown(); }} />
      }
    </Votes>
  );
}

export default ArrowList;
