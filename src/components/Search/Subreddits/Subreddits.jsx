import {
  Avatar, Box, Typography,
} from '@mui/material';
import { useState } from 'react';
import numFormatter from '../../../utils/MembersNum';
import PostJoin from '../../SubReddit/PostJoin';
import {
  Joined,
  PostContainer, PostInfo, PostInfoLink,
} from './style';

/**
 * Search by community
 * @component
 * @property  {function} handleJoin send join to backend
 * @property  {function} handleMouseIn when hover set buttom value to leave
 * @property  {function} handleMouseOut when out of hover set button value to joined

 * @return {React.Component} - Search by community
 */

function Subreddits(props) {
  const { subreddit } = props;
  const [joined, setJoined] = useState(subreddit?.isJoined);
  const handleJoin = () => {
    PostJoin(`/subreddits/${subreddit?.fixedName}/subscribe`, !joined);

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
    <PostContainer my={2} sx={{ padding: '16px' }}>
      <Box width="100%" sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <PostInfo sx={{ display: 'flex', flexDirection: 'raw' }}>
          <Avatar
            src={subreddit?.icon}
            sx={{
              width: 36,
              height: 36,
            }}
            alt="Profile Image"
          />
          <Box sx={{ padding: '0 8px' }}>
            <Box sx={{ display: 'flex' }}>
              <PostInfoLink to={`/r/${subreddit?.fixedName}`} color="#000" fontWeight="bolder">
                r/
                {subreddit?.name}
              </PostInfoLink>
              <Box color="#787C7E" fontWeight={300} display="flex" gap="4px" flexWrap="wrap">
                <Typography component="span" mx="4px" sx={{ fontSize: '6px', display: 'flex', alignItems: 'center' }}>
                  •
                </Typography>
                <div>
                  2.3m
                  {' '}
                  {numFormatter(subreddit?.membersCount)}
                </div>
              </Box>
            </Box>
            <div>
              {subreddit?.description}
            </div>
          </Box>
        </PostInfo>
        <Joined
          variant="outlined"
          onClick={handleJoin}
          onMouseEnter={handleMouseIn}
          onMouseLeave={handleMouseOut}
        >
          {(subreddit?.isJoined ? (hover ? 'leave' : 'joined') : 'join')}
        </Joined>
      </Box>
    </PostContainer>
  );
}
export default Subreddits;
