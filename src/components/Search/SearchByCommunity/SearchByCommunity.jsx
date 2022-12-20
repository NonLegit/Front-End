import { useEffect, useMemo, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useSearchParams } from 'react-router-dom';
import { Typography } from '@mui/material';
import cleanPage from '../../../utils/cleanPage';
import { useListingContext } from '../../../contexts/ListingContext';

import GetSearchData from '../Server';

// import GetSearchData from '../Server2';

import Subreddits from '../Subreddits/Subreddits';
import { NotFoundBox, NotFountImage, SearchByCommunitiesHeader } from './style';

/**
 * Search by communities container
 * @component

 * @return {React.Component} -  Search by communities container
 */
function SearchByCommunity(props) {
  const { q } = props;
  const [searchParams] = useSearchParams();
  const sort = searchParams.get('sort') || 'new';
  const t = searchParams.get('t') || 'day';
  const [communities, setCommunities] = useState([]);
  const [data] = GetSearchData('/search', q, 'communities', sort, t);
  const value2 = useMemo(() => ({ data }), [data]);
  console.log(value2);
  console.log(data);
  const [exist, setExist] = useState(true);

  useEffect(() => {
    if (data?.length === 0 || !data) {
      setExist(true);
    }
    setCommunities(data);
    console.log(communities);
  }, [data]);

  useEffect(() => {
    console.log(communities);
    console.log(communities.length);
  }, [communities]);
  const { setPage } = useListingContext();

  const fetchMoreData = () => {
    // console.log('bazwed', page);
    setPage((page) => page + 1);
  };
  cleanPage();

  return (
    exist
      ? (
        <SearchByCommunitiesHeader>
          {communities && (
          <InfiniteScroll
            next={fetchMoreData}
            hasMore
            dataLength={communities?.length}
          >

            {communities?.map((subreddit) => (

              <Subreddits subreddit={subreddit} />
            ))}

          </InfiniteScroll>
          )}

        </SearchByCommunitiesHeader>
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
