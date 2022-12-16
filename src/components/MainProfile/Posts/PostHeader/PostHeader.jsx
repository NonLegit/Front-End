import { Box, Typography } from '@mui/material';
import moment from 'moment/moment';
import LockIcon from '@mui/icons-material/Lock';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import DoDisturbAltIcon from '@mui/icons-material/DoDisturbAlt';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useState } from 'react';
import {
  HeaderAvatar, HeaderAvatarImage, HeaderPost, LinkTo, Joined,
} from './styles';
import joinCommunity from '../../joinCommunity';

/**
 * Header for a post
 *
 * @component PostHeader
 * @property {string} subReddit - name of subReddit the post published in
 * @property {string} nameuser - name of publisher
 * @property {string} time - time of publishing the post
 * @returns {React.Component} PostHeader
 */

function PostHeader(props) {
  const {
    subReddit, nameUser, Time, type, icon, locked, modState, notJoined,
  } = props;

  const [joined, setJoined] = useState(false);

  joinCommunity(joined, subReddit);

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
      <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
      }}
      >
        <HeaderAvatar>
          <HeaderAvatarImage src={icon} />
        </HeaderAvatar>

        <LinkTo to={(type === 'Subreddit') ? `/Subreddit/${subReddit}` : `/user/${subReddit}`}>
          <Typography variant="caption" sx={{ fontWeight: 700, '&:hover': { textDecoration: 'underline' } }}>
            {type === 'Subreddit' ? 'r/' : 'u/'}
            {subReddit}
            {' '}
            .
            {' '}
          </Typography>
        </LinkTo>
        <Typography variant="caption" sx={{ color: '#787c7e', marginLeft: 1 }}>
          {' '}
          Posted by
        </Typography>
        <LinkTo to={`/user/${nameUser}`}>
          <Typography variant="caption" sx={{ color: '#787c7e', '&:hover': { textDecoration: 'underline' } }}>
            u/
            {nameUser}
          </Typography>
        </LinkTo>
        <Box sx={{ flex: '1 1 auto', display: 'flex' }}>
          <Typography
            variant="caption"
            sx={{
              color: '#787c7e', marginLeft: 1,
            }}
          >
            {' '}
            {(moment.utc(Time).local().startOf('seconds')
              .fromNow())}
          </Typography>

          {locked && <LockIcon sx={{ color: '#ffd635', marginLeft: '3px' }} fontSize="string" />}
          {modState === 'spammed' && <Inventory2Icon sx={{ color: '#ff585b', marginLeft: '3px' }} fontSize="string" />}
          {modState === 'approved' && <CheckCircleIcon sx={{ color: '#75d377', marginLeft: '3px' }} fontSize="string" />}
          {modState === 'removed' && <DoDisturbAltIcon sx={{ color: '#ff585b', marginLeft: '3px' }} fontSize="string" />}
        </Box>
        {(type === 'Subreddit' && notJoined) && (
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
      </Box>
    </HeaderPost>
  );
}

export default PostHeader;
