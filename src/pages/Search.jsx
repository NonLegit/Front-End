import { Box } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import Comments from '../components/Search/Comments/Comments';
import Peoples from '../components/Search/Peoples/People';
import { SearchByCommunitiesHeader } from '../components/Search/Subreddits/style';
import Subreddits from '../components/Search/Subreddits/Subreddits';
import FilterSearch from '../components/Search/Header/Filter';
import Posts from '../components/Search/Posts/Posts';
import {
  TotalHeader, SearchContainer, PostsContainer, SearchHeadderContainer,
} from '../components/Search/Header/style';
import SideBar from '../components/Search/SideBar/SideBar';
import Post from '../components/Search/Post/Post';

function Search() {
  const [searchParams] = useSearchParams();
  const type = searchParams.get('type') || 'Posts';
  console.log(type);
  return (

    <TotalHeader>
      <SearchContainer>
        <SearchHeadderContainer>
          <FilterSearch />
          {type === 'Posts'
          && <Posts />}
        </SearchHeadderContainer>
        { type === 'Posts'
       && (
       <Box sx={{
         display: 'flex', flexDirection: 'row', margin: '0 auto', paddingTop: '8px',
       }}
       >
         <PostsContainer>
           <Post />
           <Post />
           <Post />
         </PostsContainer>
         <SideBar />
       </Box>
       )}
        { type === 'Communities'
        && (
          <SearchByCommunitiesHeader>
            <Subreddits />
            <Subreddits />
            <Subreddits />
            <Subreddits />
          </SearchByCommunitiesHeader>
        )}
        { type === 'People'
        && (
          <SearchByCommunitiesHeader>
            <Peoples />
            <Peoples />
            <Peoples />
            <Peoples />
          </SearchByCommunitiesHeader>
        )}
        { type === 'Comments'
        && (
          <SearchByCommunitiesHeader>
            <Comments />
            <Comments />
            <Comments />
            <Comments />
            <Comments />
          </SearchByCommunitiesHeader>
        )}
      </SearchContainer>
    </TotalHeader>

  );
}

export default Search;
