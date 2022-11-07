import { useState } from 'react';
import { Button } from './styles';
/**
 * This component is join button
 *
 * @component PostHeader
 * @property {boolean} isJoined -Check whether the user joined the subreddit or not.
 * @returns {React.Component} Join button
 */

function JoinButton(props) {
  const { isJoined } = props;

  const [joined, setJoined] = useState(isJoined);
  const [hover, setHover] = useState(false);

  const handleClick = () => {
    setJoined(!joined);
  };
  const handleMouseIn = () => {
    setHover(true);
  };
  const handleMouseOut = () => {
    setHover(false);
  };
  return (
    <Button
      variant={(joined ? 'outlined' : 'contained')}
      onClick={handleClick}
      onMouseEnter={handleMouseIn}
      onMouseLeave={handleMouseOut}
      data-testid="join button"
    >
      {(joined ? (hover ? 'leave' : 'joined') : 'join')}
    </Button>
  );
}

export default JoinButton;
