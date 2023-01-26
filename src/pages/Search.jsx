import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { PostsContainer, PostsContainer2 } from '../components/Search/SearchByPosts/style';
import SideBar from '../components/Search/SideBar/SideBar';
import { SearchByCommunitiesHeader } from '../components/Search/Subreddits/style';
import GetSearchData from '../components/Search/Server';
import SearchByCommunity from '../components/Search/SearchByCommunity/SearchByCommunity';
import SearchByPosts from '../components/Search/SearchByPosts/SearchByPosts';
import FilterSearch from '../components/Search/Header/Filter';
import Posts from '../components/Search/Posts/Posts';
import {
  TotalHeader, SearchContainer, SearchHeadderContainer,
} from '../components/Search/Header/style';

import SearchByPeople from '../components/Search/SearchByPeople/SearchByPeople';
import SearchByComments from '../components/Search/SearchByComments/SearchByComments';
import { useListingContext } from '../contexts/ListingContext';
import cleanPage from '../utils/cleanPage';

function Search() {
  const [searchParams] = useSearchParams();
  const type1 = searchParams.get('type') || 'posts';
  const type = type1.toLowerCase();
  const sort = searchParams.get('sort') || 'new';
  const t = searchParams.get('t') || 'day';
  const [comments, setComments] = useState([]);
  const [posts, setPosts] = useState([]);
  const [communities, setCommunities] = useState([]);
  const [people, setPeople] = useState([]);

  // const [existPosts, setExistPosts] = useState(true);
  // const [existComments, setExistComments] = useState(true);
  // const [existCommuniyty, setExistCommunity] = useState(true);
  // const [existPeople, setExistPeople] = useState(true);
  const [existPosts] = useState(true);
  const [existComments] = useState(true);
  const [existCommuniyty] = useState(true);
  const [existPeople] = useState(true);
  // fetching data

  // const qery = document.getElementById('nav_search').textContent;
  const qery = searchParams.get('q');

  const [data1] = GetSearchData('/search', qery, 'posts', sort, t);
  const [data2] = GetSearchData('/search', qery, 'comments', sort, t);
  const [data3] = GetSearchData('/search', qery, 'communities', sort, t);
  const [data4] = GetSearchData('/search', qery, 'people', sort, t);

  useEffect(() => {
    // if (data1?.length === 0) {
    //   setExistPosts(false);
    // }
    // if (data2?.length === 0) {
    //   setExistComments(false);
    // }
    // if (data3?.length === 0) {
    //   setExistCommunity(false);
    // }
    // if (data4?.length === 0) {
    //   setExistPeople(false);
    // }
    setPosts(data1);
    setCommunities(data3);
    setPeople(data4);
    setComments(data2);
  }, [data1, data2, data3, data4]);
  const { setPage } = useListingContext();

  const fetchMoreData = () => {
    // console.log('bazwed', page);
    setPage((page) => page + 1);
  };
  cleanPage();
  return (

    <TotalHeader>
      <SearchContainer>
        <SearchHeadderContainer>
          <FilterSearch />
          {type === 'posts'
          && <Posts />}
        </SearchHeadderContainer>

        { type === 'posts'
       && (
       <PostsContainer2>
         <PostsContainer>
           <InfiniteScroll
             next={fetchMoreData}
             hasMore
             dataLength={posts?.length}
           >
             <SearchByPosts posts={posts} exist={existPosts} />
           </InfiniteScroll>
         </PostsContainer>
         { (posts?.length)
        && <SideBar peoples={people} subreddits={communities} />}
       </PostsContainer2>

       )}

        { type === 'communities'
        && (
          <SearchByCommunitiesHeader>
            <InfiniteScroll
              next={fetchMoreData}
              hasMore
              dataLength={communities?.length}
            >
              <SearchByCommunity communities={communities} exist={existCommuniyty} />
            </InfiniteScroll>
          </SearchByCommunitiesHeader>
        )}

        { type === 'people'
        && (
          <SearchByCommunitiesHeader>
            <InfiniteScroll
              next={fetchMoreData}
              hasMore
              dataLength={people?.length}
            >
              <SearchByPeople people={people} exist={existPeople} />
            </InfiniteScroll>
          </SearchByCommunitiesHeader>
        )}

        { type === 'comments'
        && (
          <SearchByCommunitiesHeader>
            <InfiniteScroll
              next={fetchMoreData}
              hasMore
              dataLength={comments?.length}
            >
              <SearchByComments communities={comments} exist={existComments} />
            </InfiniteScroll>
          </SearchByCommunitiesHeader>
        )}
      </SearchContainer>
    </TotalHeader>

  );
}

export default Search;
