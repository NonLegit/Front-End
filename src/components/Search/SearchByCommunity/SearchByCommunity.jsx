// import { useEffect, useMemo, useState } from 'react';
// import InfiniteScroll from 'react-infinite-scroll-component';
// import { useSearchParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
// import { useEffect, useState } from 'react';

// import cleanPage from '../../../utils/cleanPage';
// import { useListingContext } from '../../../contexts/ListingContext';

// import GetSearchData from '../Server';

// import GetSearchData from '../Server2';

import Subreddits from '../Subreddits/Subreddits';
import {
  NotFoundBox, NotFountImage,
  // SearchByCommunitiesHeader
} from './style';

/**
 * Search by communities container
 * @component

 * @return {React.Component} -  Search by communities container
 */
function SearchByCommunity(props) {
  const { communities } = props;
  // const [searchParams] = useSearchParams();
  // const sort = searchParams.get('sort') || 'new';
  // const t = searchParams.get('t') || 'day';
  // const [communities, setCommunities] = useState([]);
  // const [data] = GetSearchData('/search', q, 'communities', sort, t);
  // const value2 = useMemo(() => ({ data }), [data]);
  // console.log(value2);
  // console.log(data);
  // const [exist, setExist] = useState(true);

  // useEffect(() => {
  //   if (data?.length === 0 || !data) {
  //     setExist(true);
  //   }
  //   setCommunities(data);
  //   console.log(communities);
  // }, [data]);

  // useEffect(() => {
  //   console.log(communities);
  //   console.log(communities.length);
  // }, [communities]);
  // const { setPage } = useListingContext();

  // const fetchMoreData = () => {
  //   // console.log('bazwed', page);
  //   setPage((page) => page + 1);
  // };
  // cleanPage();
  // const [exist1, setExist] = useState(true);

  // useEffect(() => {
  //   if (communities?.length === 0 || communities == null) { setExist(true); }
  // }, [communities]);
  return (
    (communities?.length > 0)
      ? (
    // <SearchByCommunitiesHeader>
    //   {communities && (
    //   <InfiniteScroll
    //     next={fetchMoreData}
    //     hasMore
    //     dataLength={communities?.length}
    //   >
        <Box>
          {communities?.map((subreddit) => (

            <Subreddits subreddit={subreddit} />
          ))}
        </Box>
    //   </InfiniteScroll>
    //   )}

    // </SearchByCommunitiesHeader>
      )
      : (
        <NotFoundBox>
          <NotFountImage src="https://www.redditstatic.com/desktop2x/img/telescope-snoo.png" />
          <Typography sx={{ fontWeight: 700, marginBottom: 2, fontSize: '18px' }}>Sorry,we cant find any data about this search</Typography>
        </NotFoundBox>
      )
  );
}

export default SearchByCommunity;
