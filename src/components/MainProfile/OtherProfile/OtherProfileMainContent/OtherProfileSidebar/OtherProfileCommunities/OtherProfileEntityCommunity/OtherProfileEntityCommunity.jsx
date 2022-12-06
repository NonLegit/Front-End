import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import joinPost from './server';
import {
  ComminityBox, HeaderAvatar, HeaderAvatarText, Joined, SubReddit,
} from './styles';

function OtherProfileEntityComment(props) {
  const { community } = props;
  // check if current logged in user is joined or not
  const [joined, setJoined] = useState(false);

  joinPost(joined, community.subredditName);

  // sharing their state currently
  const handleJoin = () => {
    setJoined((prev) => !prev);
  };

  const [hover, setHover] = useState(false);

  const handleMouseIn = () => {
    setHover(true);
  };
  const handleMouseOut = () => {
    setHover(false);
  };
  return (
    <ComminityBox>
      <HeaderAvatar>
        <HeaderAvatarText>r/</HeaderAvatarText>
      </HeaderAvatar>

      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <SubReddit to={`/Subreddit/${community.fixedName}`}>
          r/
          {community.fixedName}
        </SubReddit>
        <Typography sx={{ fontSize: 12 }}>
          {community.membersCount}
          {' '}
          members
        </Typography>
      </Box>

      <Joined
        variant={(joined ? 'outlined' : 'contained')}
        onClick={handleJoin}
        onMouseEnter={handleMouseIn}
        onMouseLeave={handleMouseOut}
        data-testid="join button"
      >
        {(joined ? (hover ? 'leave' : 'joined') : 'join')}
      </Joined>
    </ComminityBox>
  );
}

export default OtherProfileEntityComment;
