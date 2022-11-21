import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import FilteredPostsProvider from '../../../contexts/FilteredPostsProvider';
import ContentProvider from '../../../contexts/ContentProvider';
import PostsProvider from '../../../contexts/PostsProvider';
import UserProvider from '../../../contexts/UserProvider';
import UserInfoProvider from '../../../contexts/UserInfoProvider';
import Content from './Content/Content';
import PostsFilteredTap from './PostsFilteredTap/PostsFilteredTap';
import PostsTap from './PostsTap/PostsTap';
import Sidebar from './Sidebar/Sidebar';
import { ProfilePage } from './styles';

const renderSwitch = (param, username) => {
  if (param === undefined || param === 'sort=new' || param === 'sort=hot' || param === 'sort=top' || param === 'sort=top&t=day') {
    return (
      <ContentProvider name={username}>
        <Content />
      </ContentProvider>
    );
  }

  if (param === 'submitted' || param === 'submitted/sort=new') {
    return (
      <PostsProvider name={username}>
        <PostsTap />
      </PostsProvider>
    );
  }
  if (param === 'upvoted' || param === 'downvoted' || param === 'saved' || param === 'hidden') {
    return (
      <FilteredPostsProvider param={param} name={username}>
        <PostsFilteredTap type={param} />
      </FilteredPostsProvider>
    );
  }
  return (
    <div />
  );
};

/**
 * MainContent if the profile page
 *
 * @component MainContentProfile
 * @property  {function} handleClick to navigate to the subpage
 * @return {React.Component} - MainContent
 */

function ProfileMainContent() {
  const { subTitle, username } = useParams();
  return (
    <Box>
      <UserProvider name={username}>
        <ProfilePage>
          {renderSwitch(subTitle, username)}
          <UserInfoProvider name={username}>
            <Sidebar />
          </UserInfoProvider>
        </ProfilePage>
      </UserProvider>
    </Box>
  );
}

export default ProfileMainContent;
