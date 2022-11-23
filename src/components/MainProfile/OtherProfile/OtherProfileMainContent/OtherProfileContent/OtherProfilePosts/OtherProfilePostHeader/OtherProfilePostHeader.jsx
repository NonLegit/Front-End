import { Box, Typography } from '@mui/material';
import moment from 'moment/moment';
import { useState } from 'react';
// import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {
  HeaderAvatar, HeaderAvatarText, HeaderPost, Joined, LinkTo,
} from './styles';

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
    subReddit, nameUser, Time, isSubReddit,
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
      <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
      }}
      >
        <HeaderAvatar>
          <HeaderAvatarText>r/</HeaderAvatarText>
        </HeaderAvatar>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', marginRight: '70px' }}>
          <LinkTo to={`/Subreddit/${subReddit}`}>
            <Typography variant="caption" sx={{ fontWeight: 700, '&:hover': { textDecoration: 'underline' } }}>
              r/
              {subReddit}
              {' '}
              .
            </Typography>
          </LinkTo>
          <Typography variant="caption" sx={{ color: '#787c7e', marginLeft: 1 }}>
            Posted by
          </Typography>
          <LinkTo to={`/user/${nameUser}`}>
            <Typography variant="caption" sx={{ color: '#787c7e', marginLeft: 1, '&:hover': { textDecoration: 'underline' } }}>
              u/
              {nameUser}
            </Typography>
          </LinkTo>
          <Typography
            variant="caption"
            sx={{
              color: '#787c7e', marginLeft: 1, flex: '1 1 auto', display: 'flex',
            }}
          >
            {' '}
            {(moment.utc(Time).local().startOf('seconds')
              .fromNow())}
          </Typography>

        </Box>
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
