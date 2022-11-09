import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import FilteredPostsProvider from '../../../context/FilteredPostsProvider';
import ContentProvider from '../../../context/ContentProvider';
import PostsProvider from '../../../context/PostsProvider';
import UserProvider from '../../../context/UserProvider';
import Content from './Content/Content';
import PostsFilteredTap from './PostsFilteredTap/PostsFilteredTap';
import PostsTap from './PostsTap/PostsTap';
import Sidebar from './Sidebar/Sidebar';
import { ProfilePage } from './styles';

const renderSwitch = (param) => {
  if (param === undefined || param === 'sort=new' || param === 'sort=hot' || param === 'sort=top' || param === 'sort=top&t=day') {
    return (
      <ContentProvider>
        <Content />
      </ContentProvider>
    );
  }

  if (param === 'submitted' || param === 'submitted/sort=new') {
    return (
      <PostsProvider>
        <PostsTap />
      </PostsProvider>
    );
  }
  if (param === 'upvoted' || param === 'downvoted' || param === 'saved' || param === 'hidden') {
    return (
      <FilteredPostsProvider param={param}>
        <PostsFilteredTap type={param} />
      </FilteredPostsProvider>
    );
  }
  return (
    <>no</>
  );
};

/**
 * Main content of the profile pagee containing comments and posts
 * @return {React.Component} - MainContent
 */
function MainContent() {
  const { subTitle } = useParams();

  return (
    <Box>
      <UserProvider>
        <ProfilePage>
          {renderSwitch(subTitle)}
          <Sidebar />
        </ProfilePage>
      </UserProvider>
    </Box>
  );
}

export default MainContent;
