import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import ContentProvider from '../../../context/ContentProvider';
import PostsProvider from '../../../context/PostsProvider';
import UserProvider from '../../../context/UserProvider';
import UserInfoProvider from '../../../context/UserInfoProvider';
import Content from './Content/Content';
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

  if (param === 'submitted') {
    return (
      <PostsProvider name={username}>
        <PostsTap />
      </PostsProvider>
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
