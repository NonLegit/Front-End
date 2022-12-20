import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useSearchParams } from 'react-router-dom';
import { Typography } from '@mui/material';
import cleanPage from '../../../utils/cleanPage';
import { useListingContext } from '../../../contexts/ListingContext';
import Comments from '../Comments/Comments';

import GetSearchData from '../Server';
// import GetSearchData from '../Server2';

import { NotFoundBox, NotFountImage, SearchByCommunitiesHeader } from './style';

/**
 *  Search by comments container
 * @component

 * @return {React.Component} -  Search by comments container
 */
function SearchByComments(props) {
  const { q } = props;
  const [searchParams] = useSearchParams();
  const sort = searchParams.get('sort') || 'new';
  const t = searchParams.get('t') || 'day';
  const [comments, setComments] = useState([]);
  const [data] = GetSearchData('/search', q, 'comments', sort, t);
  const [exist, setExist] = useState(true);

  useEffect(() => {
    if (data?.length === 0 || !data) {
      setExist(true);
    }
    setComments(data);
  }, [data]);

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
          <InfiniteScroll
            next={fetchMoreData}
            hasMore
            dataLength={comments?.length}
          >

            {comments?.map((comm) => (

              <Comments Comment={comm} />
            ))}

          </InfiniteScroll>
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

export default SearchByComments;
