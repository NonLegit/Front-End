import { useState } from 'react';
import { Button } from './styles';

function JoinButton(props) {
  const { isJoined } = props;
  const [joined, setJoined] = useState(isJoined);
  const [hover, setHover] = useState(false);
  const handleClick = () => {
    setJoined(!joined);
  };
  // console.log(joined);
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
