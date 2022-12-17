import { Box, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { useState } from 'react';
import numFormatter from '../../../utils/MembersNum';
import { followRequest } from './FollowServer';
import {
  TextP, Text, TextContainer, OneSuggeest, Joined,
} from './style';

function Peoples(props) {
  const { people } = props;
  const [follow, setFollow] = useState(true);
  const handleJoin = () => {
    followRequest(people?.fixedName, follow);
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
    <OneSuggeest sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Box sx={{ display: 'flex' }}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <TextContainer>
          <Text to={`/user/${people?.fixedName}`}>
            U/
            {people?.fixedName}
          </Text>
          <Typography component="span" mx="4px" sx={{ fontSize: '6px', display: 'flex', alignItems: 'center' }}>
            •
          </Typography>
          <TextP>
            {numFormatter(people?.karma)}
            {' '}
            karma
          </TextP>
        </TextContainer>
      </Box>
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
export default Peoples;
