import { Box, Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { CommunitiesSubscriberContext } from '../../../../../../../contexts/CommunitiesSubscriberContext';

import joinPost from './server';
import {
  ComminityBox, HeaderAvatar, HeaderAvatarImage, Joined, SubReddit,
} from './styles';

function OtherProfileEntityComment(props) {
  const { community } = props;
  const { communitiesSubscriber } = useContext(CommunitiesSubscriberContext);

  // check if current logged in user is joined or not
  const [joined, setJoined] = useState(false);

  useEffect(() => {
    if ((communitiesSubscriber?.filter((e) => e?.fixedName === community?.fixedName))?.length > 0) {
      console.log(communitiesSubscriber, community.fixedName);
      setJoined(true);
    }
  }, [communitiesSubscriber, community]);

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
        <HeaderAvatarImage src={community.icon} />
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
