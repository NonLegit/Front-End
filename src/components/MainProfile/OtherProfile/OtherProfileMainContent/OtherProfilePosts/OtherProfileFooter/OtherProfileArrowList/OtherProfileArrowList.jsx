import { useState } from 'react';
import {
  DownArrow,
  DownArrowFilled,
  Number, UpArrow, UpArrowFilled, Votes,
} from './styles';
import { postReactionsServer } from '../../../../../profileServer';

/**
 * the upvoted and downvoted arrows in responsive postfooter
 *
 * @component ArrowList
 * @property {number} points - get number of upvotes or downvotes on a post
 * @property {number} postVoteStatus - get if the post is upvoted or downvoted or none
 * @returns {React.Component} ArrowList
 */
function OtherProfileArrowList(props) {
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
    <Votes>
      {
        (status === '1') ? <UpArrowFilled onClick={() => { handleNoUpvote(); }} /> : <UpArrow onClick={() => { handleClickUp(); }} />
      }
      <Number variant="caption" sx={{ fontWeight: 700 }}>{postPoints}</Number>
      {
        (status === '-1') ? <DownArrowFilled onClick={() => { handleNoDownvote(); }} /> : <DownArrow onClick={() => { handleClickDown(); }} />
      }
    </Votes>
  );
}

export default OtherProfileArrowList;
