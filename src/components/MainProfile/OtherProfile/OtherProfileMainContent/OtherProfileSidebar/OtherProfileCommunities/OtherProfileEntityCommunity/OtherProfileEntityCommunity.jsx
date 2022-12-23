import { Box, Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import PostJoin from '../../../../../../SubReddit/PostJoin';
import { CommunitiesSubscriberContext } from '../../../../../../../contexts/CommunitiesSubscriberContext';

import {
  ComminityBox, HeaderAvatar, HeaderAvatarImage, Joined, SubReddit,
} from './styles';
/**
 * OtherProfileEntityComment component shows all comments over a post
 *
 * @component OtherProfileEntityComment
 * @property {object} community - entity
 * @property {boolean} handleJoin - sharing their state currently
 * @property {boolean} handleMouseIn - show text when hover
 * @property {boolean} handleMouseOut - retyrn the text to its default state
 * @returns {React.Component} OtherProfileEntityComment
 */
function OtherProfileEntityComment(props) {
  const { community } = props;
  const { communitiesSubscriber } = useContext(CommunitiesSubscriberContext);

  // check if current logged in user is joined or not
  const [joined, setJoined] = useState(false);

  useEffect(() => {
    console.log(community.fixedName);
    if ((communitiesSubscriber?.filter((e) => e?.fixedName === community?.fixedName))?.length > 0) {
      console.log(communitiesSubscriber, community.fixedName);
      setJoined(true);
    }
  }, [communitiesSubscriber, community]);

  // sharing their state currently
  const handleJoin = () => {
    PostJoin(`/subreddits/${community.fixedName}/subscribe`, joined ? 'unsub' : 'sub');
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
        <SubReddit to={`/r/${community.fixedName}`}>
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
