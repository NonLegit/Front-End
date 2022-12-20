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

  /**
   * this function toggles the join state of the user
   */
  const handleClick = (e) => {
    e.stopPropagation();
    setJoined(!joined);
  };

  /**
   * this function display leave to user if he have already joined the community while hovering
   */
  const handleMouseIn = () => {
    setHover(true);
  };

  /**
   * this function display joined to user if he have already joined the community while not hovering
   */
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
