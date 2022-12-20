// import { useEffect, useState } from 'react';
// import InfiniteScroll from 'react-infinite-scroll-component';
// import { useSearchParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
// import { useListingContext } from '../../../contexts/ListingContext';

// import GetSearchData from '../Server';
// import GetSearchData from '../Server2';

import {
  NotFoundBox, NotFountImage,
  // PostsContainer, PostsContainer2,
} from './style';
import PostsCom from '../Post/Post';
// import SideBar from '../SideBar/SideBar';
// import cleanPage from '../../../utils/cleanPage';

/**
 *  Search by posts container
 * @component

 * @return {React.Component} - Search by posts container
 */
function SearchByPosts(props) {
  const { exist, posts } = props;

  // const [searchParams] = useSearchParams();
  // const sort = searchParams.get('sort') || 'new';
  // const t = searchParams.get('t') || 'day';
  // const [posts, setPosts] = useState([]);
  // const [communities, setCommunities] = useState([]);
  // const [people, setPeople] = useState([]);
  // const [data] = GetSearchData('/search', q, 'posts', sort, t);

  // const [data2] = GetSearchData('/search', q, 'communities', sort, t);

  // const [data3] = GetSearchData('/search', q, 'people', sort, t);
  // const [exist, setExist] = useState(true);

  // useEffect(() => {
  //   setPosts(data);
  //   console.log(data);
  //   // if (!data2 || data2?.length === 0) {
  //   setCommunities(data2?.slice(0, 3));
  //   // }
  //   // if (!data3 || data3?.length === 0) {
  //   setPeople(data3?.slice(0, 3));
  //   // }
  //   // if (data?.length === 0 || !data) {
  //   //   console.log(data?.length === 0 || !data);
  //   //   setExist(true);
  //   // }
  //   setExist(true);
  //   console.log('barrraaaaaaaaaaaaa', data?.length === 0 || !data);
  // }, [data, data2, data3]);

  // const { setPage } = useListingContext();

  // const fetchMoreData = () => {
  //   // console.log('bazwed', page);
  //   setPage((page) => page + 1);
  // };
  // cleanPage();

  return (
    exist
      ? (
    // <PostsContainer2>
    //   <PostsContainer>
    //     <InfiniteScroll
    //       next={fetchMoreData}
    //       hasMore
    //       dataLength={posts?.length}
    //     >
        <Box>
          {posts?.map((p) => (

            <PostsCom post={p} />
          ))}
        </Box>
    //   </InfiniteScroll>
    // </PostsContainer>
    //   <SideBar peoples={people} subreddits={communities} />
    // </PostsContainer2>
      )
      : (
        <NotFoundBox>
          <NotFountImage src="https://www.redditstatic.com/desktop2x/img/telescope-snoo.png" />
          <Typography sx={{ fontWeight: 700, marginBottom: 2, fontSize: '18px' }}>Sorry,we cant find any data about this search</Typography>
        </NotFoundBox>
      )
  );
}

export default SearchByPosts;
