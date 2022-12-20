import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useSearchParams } from 'react-router-dom';
import { Typography } from '@mui/material';
import cleanPage from '../../../utils/cleanPage';
import { useListingContext } from '../../../contexts/ListingContext';
import Peoples from '../Peoples/People';

import GetSearchData from '../Server';
// import GetSearchData from '../Server2';

import { NotFoundBox, NotFountImage, SearchByCommunitiesHeader } from './style';

/**
 *  Search by people container
 * @component

 * @return {React.Component} -  Search by people container
 */
function SearchByPeople(props) {
  const { q } = props;
  const [searchParams] = useSearchParams();
  const sort = searchParams.get('sort') || 'new';
  const t = searchParams.get('t') || 'day';
  const [people, setPeople] = useState([]);
  const [data] = GetSearchData('/search', q, 'people', sort, t);
  const [exist, setExist] = useState(true);

  const { setPage } = useListingContext();

  const fetchMoreData = () => {
    // console.log('bazwed', page);
    setPage((page) => page + 1);
  };
  cleanPage();
  useEffect(() => {
    if (data?.length === 0 || !data) {
      setExist(true);
    }
    setPeople(data);
  }, [data]);
  return (
    exist
      ? (
        <SearchByCommunitiesHeader>
          <InfiniteScroll
            next={fetchMoreData}
            hasMore
            dataLength={people?.length}
          >

            {people?.map((peoplee) => (

              <Peoples people={peoplee} />
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

export default SearchByPeople;
