import { Box, Typography } from '@mui/material';
import { useState } from 'react';
// import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {
  HeaderAvatar, HeaderAvatarText, HeaderPost, Joined,
} from './styles';

// calculate the time difference between post creation and current date
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
 * Header for a post
 *
 * @component OtherProfilePostHeader
 * @property {string} subReddit - name of subReddit the post published in
 * @property {string} nameuser - name of publisher
 * @property {string} time - time of publishing the post
 * @returns {React.Component} OtherProfilePostHeader
 */

function OtherProfilePostHeader(props) {
  const {
    subReddit, nameUser, Time,
  } = props;
  const d = new Date();
  const [joined, setJoined] = useState(false);

  const handleJoin = () => {
    setJoined((prev) => !prev);
  };
  return (
    <HeaderPost>
      <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
      }}
      >
        {/* OR PHOTO */}
        <HeaderAvatar>
          <HeaderAvatarText>r/</HeaderAvatarText>
        </HeaderAvatar>
        {/* OR PHOTO */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', marginRight: '70px' }}>
          <Typography variant="caption" sx={{ fontWeight: 700, marginLeft: 1, '&:hover': { textDecoration: 'underline' } }}>
            r/
            {subReddit}
            {' '}
            .
          </Typography>
          <Typography variant="caption" sx={{ color: '#787c7e', marginLeft: 1 }}>
            Posted by
          </Typography>
          <Typography variant="caption" sx={{ color: '#787c7e', marginLeft: 1, '&:hover': { textDecoration: 'underline' } }}>
            u/
            {nameUser}
          </Typography>
          <Typography
            variant="caption"
            sx={{
              color: '#787c7e', marginLeft: 1, flex: '1 1 auto', display: 'flex',
            }}
          >
            {' '}
            {calculateTime(d, Time)}
          </Typography>

        </Box>
        {joined
          ? <Joined onClick={() => { handleJoin(); }} variant="outlined" onMouseEnter={(e) => { e.target.innerHTML = 'Leave'; }} onMouseLeave={(e) => { e.target.innerHTML = 'Joined'; }}>Joined</Joined>
          : <Joined onClick={() => { handleJoin(); }} variant="contained" onMouseLeave={(e) => { e.target.innerHTML = 'Join'; }}>Join</Joined>}

      </Box>

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
