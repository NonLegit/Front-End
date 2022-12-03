import { Typography } from '@mui/material';

import LockIcon from '@mui/icons-material/Lock';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import moment from 'moment/moment';
import {
  Flair,
  HeaderPost, LinkTo,
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
    nsfw,
    locked,
    flairBackgroundColor,
    flairColor,
    flair,
  } = props;
  return (
    <HeaderPost>
      <LinkTo to={`/Subreddit/${subReddit}`}>
        {type === 'Subreddit' ? (
          <Typography variant="caption" sx={{ fontWeight: 700, '&:hover': { textDecoration: 'underline' } }}>
            r/
            {subReddit}
            {' '}
            .
          </Typography>
        ) : (
          <Typography variant="caption" sx={{ fontWeight: 700, '&:hover': { textDecoration: 'underline' } }}>
            u/
            {subReddit}
            {' '}
            .
          </Typography>
        )}
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
      <Typography variant="caption" sx={{ color: '#787c7e', marginLeft: 1 }}>
        {' '}
        {(moment.utc(Time).local().startOf('seconds')
          .fromNow())}
      </Typography>
      <Flair
        disableRipple
        backgroundColor={flairBackgroundColor}
        flairColor={flairColor}
      >
        {flair}
      </Flair>
      {locked && <LockIcon sx={{ color: '#ffd635', marginLeft: '3px' }} fontSize="string" />}
      {nsfw && <Inventory2Icon sx={{ color: '#ff585b', marginLeft: '3px' }} fontSize="string" />}

    </HeaderPost>
  );
}

export default PostHeader;
