import { Typography } from '@mui/material';
import { useState } from 'react';
// import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {
  HeaderPost, Joined,
} from './styles';

// calculate the time difference between the creation day and current day
const calculateTime = (d, time) => {
  const year = d.getFullYear() - time.split('T')[0].split('-')[0];
  const month = d.getMonth() - time.split('T')[0].split('-')[1];
  const day = d.getDate() - time.split('T')[0].split('-')[2];

  if (year > 0) {
    return (`${year} years ago`);
  }
  if (month > 0) {
    return (`${month} months ago`);
  }
  if (day > 0) {
    return (`${day} days ago`);
  }
  return ('today');
};

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
  const { nameUser, Time, subReddit } = props;
  const d = new Date();
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
      <Typography variant="caption" sx={{ fontWeight: 700, '&:hover': { textDecoration: 'underline' } }}>
        r/
        {subReddit}
        {' '}
        .
      </Typography>
      <Joined
        variant={(joined ? 'outlined' : 'contained')}
        onClick={handleJoin}
        onMouseEnter={handleMouseIn}
        onMouseLeave={handleMouseOut}
        data-testid="join button"
      >
        {(joined ? (hover ? 'leave' : 'joined') : 'join')}
      </Joined>
      <Typography variant="caption" sx={{ color: '#787c7e', marginLeft: 1 }}>
        Posted by
      </Typography>
      <Typography variant="caption" sx={{ color: '#787c7e', marginLeft: 1, '&:hover': { textDecoration: 'underline' } }}>
        u/
        {nameUser}
      </Typography>
      <Typography variant="caption" sx={{ color: '#787c7e', marginLeft: 1 }}>
        {' '}
        {calculateTime(d, Time)}
      </Typography>

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
