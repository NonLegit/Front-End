import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import {
  ComminityBox, HeaderAvatar, HeaderAvatarText, Joined, SubReddit,
} from './styles';

function OtherProfileEntityComment(props) {
  const { community } = props;
  // check if current logged in user is joined or not
  const [joined, setJoined] = useState(false);

  // sharing their state currently
  const handleJoin = () => {
    setJoined((prev) => !prev);
  };
  return (
    <ComminityBox>
      <HeaderAvatar>
        <HeaderAvatarText>r/</HeaderAvatarText>
      </HeaderAvatar>

      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <SubReddit to={`/r/${community.subredditName}`}>
          r/
          {community.subredditName}
        </SubReddit>
        <Typography sx={{ fontSize: 12 }}>
          {community.membersCount}
          {' '}
          members
        </Typography>
      </Box>

      {joined
        ? <Joined onClick={() => { handleJoin(); }} variant="outlined" onMouseEnter={(e) => { e.target.innerHTML = 'Leave'; }} onMouseLeave={(e) => { e.target.innerHTML = 'Joined'; }}>Joined</Joined>
        : <Joined onClick={() => { handleJoin(); }} variant="contained" onMouseLeave={(e) => { e.target.innerHTML = 'Join'; }}>Join</Joined>}
    </ComminityBox>
  );
}

export default OtherProfileEntityComment;
