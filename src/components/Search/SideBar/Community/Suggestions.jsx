import Avatar from '@mui/material/Avatar';
import { useState } from 'react';
import {
  TextP, Text, TextContainer, OneSuggeest, Joined,
} from './style';

function Suggestions() {
  const [joined, setJoined] = useState(true);
  const handleJoin = () => {
    setJoined((prev) => !prev);
  };

  const [hover, setHover] = useState(false);

  const handleMouseIn = () => {
    setHover(true);
  };
  const handleMouseOut = () => {
    setHover(false);
  }; return (
    <OneSuggeest>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <TextContainer>
        <Text>
          r/HistoryPorn
        </Text>
        <TextP>
          3.3m Members
        </TextP>
      </TextContainer>
      <Joined
        variant="outlined"
        onClick={handleJoin}
        onMouseEnter={handleMouseIn}
        onMouseLeave={handleMouseOut}
      >
        {(joined ? (hover ? 'leave' : 'joined') : 'join')}
      </Joined>
    </OneSuggeest>
  );
}
export default Suggestions;
