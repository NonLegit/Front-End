import { Typography } from '@mui/material';

import LockIcon from '@mui/icons-material/Lock';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import DoDisturbAltIcon from '@mui/icons-material/DoDisturbAlt';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import moment from 'moment/moment';
import { useState } from 'react';
import {
  HeaderPost, Joined, LinkTo,
} from './styles';

/**
 * Header of the post
 *
 * @component PostHeader
 * @property {string} nameUser -name of the currently loggedin user
 * @property {string} Time -contains the time of the post
 * @property {string} nameUser -contains the name of subreddit the post piblished in
 * @returns {React.Component} PostHeader
 */

function PostHeader(props) {
  const {
    nameUser,
    Time,
    subReddit,
    type,
    notJoined,
    modState,
    locked,
  } = props;

  const [joined, setJoined] = useState(false);

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
    <HeaderPost>

      <LinkTo to={(type === 'Subreddit') ? `/Subreddit/${subReddit}` : `/user/${subReddit}`}>
        <Typography variant="caption" sx={{ fontWeight: 700, '&:hover': { textDecoration: 'underline' } }}>
          {type === 'Subreddit' ? 'r/' : 'u/'}
          {subReddit}
          {' '}
          .
        </Typography>
      </LinkTo>
      {(notJoined && type === 'Subreddit') && (
      <Joined
        variant={(joined ? 'outlined' : 'contained')}
        onClick={handleJoin}
        onMouseEnter={handleMouseIn}
        onMouseLeave={handleMouseOut}
        data-testid="join button"
      >
        {(joined ? (hover ? 'leave' : 'joined') : 'join')}
      </Joined>
      )}

      <Typography variant="caption" sx={{ color: '#787c7e', marginLeft: 1 }}>
        Posted by
      </Typography>
      <LinkTo to={`/user/${nameUser}`}>
        <Typography variant="caption" sx={{ color: '#787c7e', marginLeft: 1, '&:hover': { textDecoration: 'underline' } }}>
          u/
          {nameUser}
        </Typography>
      </LinkTo>
      <Typography variant="caption" sx={{ color: '#787c7e', marginLeft: 1 }}>
        {' '}
        {(moment.utc(Time).local().startOf('seconds')
          .fromNow())}
      </Typography>

      {locked && <LockIcon sx={{ color: '#ffd635', marginLeft: '3px' }} fontSize="string" />}
      {modState === 'spammed' && <Inventory2Icon sx={{ color: '#ff585b', marginLeft: '3px' }} fontSize="string" />}
      {modState === 'approved' && <CheckCircleIcon sx={{ color: '#75d377', marginLeft: '3px' }} fontSize="string" />}
      {modState === 'removed' && <DoDisturbAltIcon sx={{ color: '#ff585b', marginLeft: '3px' }} fontSize="string" />}

    </HeaderPost>
  );
}

export default PostHeader;
