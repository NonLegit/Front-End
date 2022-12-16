import Avatar from '@mui/material/Avatar';
import { useState } from 'react';
import {
  TextP, Text, TextContainer, OneSuggeest, Joined,
} from './style';

function Suggestions() {
  const [follow, setFollow] = useState(true);
  const handleJoin = () => {
    setFollow((prev) => !prev);
  };

  const [hover, setHover] = useState(false);

  const handleMouseIn = () => {
    setHover(true);
  };
  const handleMouseOut = () => {
    setHover(false);
  };
  return (
    <OneSuggeest>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <TextContainer>
        <Text to="/user/hi">
          U/hi
        </Text>
        <TextP>
          100 karma
        </TextP>
      </TextContainer>
      <Joined
        variant="outlined"
        onClick={handleJoin}
        onMouseEnter={handleMouseIn}
        onMouseLeave={handleMouseOut}
      >
        {(follow ? (hover ? 'Unfollow' : 'Following') : 'follow')}
      </Joined>
    </OneSuggeest>
  );
}
export default Suggestions;
