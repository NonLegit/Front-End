import { Typography } from '@mui/material';
import { Box } from '@mui/system';

import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { followersServer } from './followersServer';
import {
  ContentBox, FollowersBox, Search, SearchBox, SearchIconButton,
} from './styles';
import Follower from './Follower/Follower';
import { useListingContext } from '../../../../../contexts/ListingContext';

/**
 *FollowersList
 *
 * @component FollowersList
 * @property {function} handleSubmit - submit action
 * @property {function} fetchMoreData - get more data

 * @returns {React.Component} FollowersList
 */
function FollowersList() {
  const [data] = followersServer();
  const [filter, setFilter] = useState(data);

  useEffect(() => {
    setFilter(data);
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    setFilter(e.target[0].value === '' ? data : data.filter((x) => x.userName === e.target[0].value));
  };

  const { setPage } = useListingContext();
  const fetchMoreData = () => {
    setPage((page) => page + 1);
  };

  return (
    <ContentBox>
      <SearchBox>
        <Box sx={{ flex: 1 }}>
          <Typography variant="body2" sx={{ fontWeight: 700 }}>Followers</Typography>
          <Typography variant="caption" sx={{ color: '#7c7c7c' }}>This list is only visible to you. The most recent follows are shown first.</Typography>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Search
            component="form"
            onSubmit={(e) => { handleSubmit(e); }}
          >
            <InputBase
              sx={{
                ml: 1, flex: 1, fontSize: '14px', p: '8px',
              }}
              placeholder="Search for a user"
              inputProps={{ 'aria-label': 'Search for a user' }}
            />
            <SearchIconButton
              type="button"
              aria-label="search"
            >
              <SearchIcon sx={{ color: 'white' }} />
            </SearchIconButton>

          </Search>
        </Box>
      </SearchBox>
      <FollowersBox>
        {data && (
        <InfiniteScroll
          next={fetchMoreData}
          hasMore
          dataLength={data.length}
        >
          { filter?.map((following, index) => (
            <Follower key={`${index + 0}`} follower={following} />
          ))}
        </InfiniteScroll>
        )}
      </FollowersBox>
    </ContentBox>
  );
}

export default FollowersList;
