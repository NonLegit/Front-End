import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import PostJoin from '../../../../../../SubReddit/PostJoin';

import {
  ComminityBox, HeaderAvatar, HeaderAvatarImage, Joined, SubReddit,
} from './styles';

/**
 * EntityComment
 *
 * @component Filter
 * @property {function} handleJoin - sharing their state currently
 * @property {function} handleMouseIn - set text when hover
 * @property {function} handleMouseOut - return text to its default state
 * @property {ibjest} community - entity
 * @returns {React.Component} EntityComment
 */

function EntityComment(props) {
  const { community } = props;
  // check if current logged in user is joined or not
  const [joined, setJoined] = useState(true);

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

export default EntityComment;
