import { Typography } from '@mui/material';
import moment from 'moment/moment';
import { useState } from 'react';
import LockIcon from '@mui/icons-material/Lock';
import Inventory2Icon from '@mui/icons-material/Inventory2';
// import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {
  HeaderPost, Joined, LinkTo,
} from './styles';

/**
 * Header of the post
 *
 * @component OtherProfilePostHeader
 * @property {string} nameUser -name of the currently loggedin user
 * @property {string} Time -contains the time of the post
 * @property {string} nameUser -contains the name of subreddit the post piblished in
 * @returns {React.Component} OtherProfilePostHeader
 */

function OtherProfilePostHeader(props) {
  const {
    nameUser, Time, subReddit, nsfw, locked, isSubReddit, type,
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

      {type === 'Subreddit' ? (
        <LinkTo to={`/Subreddit/${subReddit}`}>
          <Typography variant="caption" sx={{ fontWeight: 700, '&:hover': { textDecoration: 'underline' } }}>
            r/
            {subReddit}
            {' '}
            .
          </Typography>
        </LinkTo>
      ) : (
        <LinkTo to={`/user/${subReddit}`}>
          <Typography variant="caption" sx={{ fontWeight: 700, '&:hover': { textDecoration: 'underline' } }}>
            u/
            {subReddit}
            {' '}
            .
          </Typography>

        </LinkTo>
      )}
      {isSubReddit && (
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
      {nsfw && <Inventory2Icon sx={{ color: '#ff585b', marginLeft: '3px' }} fontSize="string" />}

      {/* {((subTitle === 'Spam').toString() === 'true')
      && (
        <RemovalBox>
          <BlockOutlinedIcon fontSize="string" />
          <Typography variant="caption">Add a removal reason</Typography>
        </RemovalBox>
      )}
      {((subTitle === 'Edited').toString() === 'true')
      && (
      <ApprovedBox>
        <CheckCircleIcon fontSize="string" />
      </ApprovedBox>
      )} */}
    </HeaderPost>
  );
}

export default OtherProfilePostHeader;
