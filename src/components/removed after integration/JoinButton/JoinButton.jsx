import { useState } from 'react';
import { Button } from './styles';

function JoinButton() {
  const [joined, setJoined] = useState(false);
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
    >
      {(joined ? (hover ? 'leave' : 'joined') : 'join')}
    </Button>
  );
}

export default JoinButton;
