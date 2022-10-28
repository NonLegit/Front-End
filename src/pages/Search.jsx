import { Box } from '@mui/material';
import SearchHeader from '../components/Search/Header/SearchHeader';
import Posts from '../components/Search/Posts/Posts';
import {
  TotalHeader, SearchContainer, PostsContainer, SearchHeadderContainer,
} from '../components/Search/Header/style';
import SideBar from '../components/Search/SideBar/SideBar';
import Post from '../components/Search/Post/Post';

function Search() {
  return (

    <TotalHeader>
      <SearchContainer>
        <SearchHeadderContainer>
          <SearchHeader />
          <Posts />
        </SearchHeadderContainer>
        <Box sx={{ display: 'flex', flexDirection: 'row', margin: '0 auto' }}>
          <PostsContainer>
            <Post />
            <Post />
            <Post />
          </PostsContainer>
          <SideBar />
        </Box>
      </SearchContainer>
    </TotalHeader>

  );
}

export default Search;
