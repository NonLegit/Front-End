import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import ContentProvider from '../../../context/ContentProvider';
import PostsProvider from '../../../context/PostsProvider';
import UserProvider from '../../../context/UserProvider';
import UserInfoProvider from '../../../context/UserInfoProvider';
import OtherProfileContent from './OtherProfileContent/OtherProfileContent';
import OtherProfilePostsTap from './OtherProfilePostsTap/OtherProfilePostsTap';
import OtherProfileSidebar from './OtherProfileSidebar/OtherProfileSidebar';
import { ProfilePage } from './styles';

const renderSwitch = (param, username) => {
  if (param === undefined || param === 'sort=new' || param === 'sort=hot' || param === 'sort=top' || param === 'sort=top&t=day') {
    return (
      <ContentProvider name={username}>
        <OtherProfileContent />
      </ContentProvider>
    );
  }

  if (param === 'submitted') {
    return (
      <PostsProvider name={username}>
        <OtherProfilePostsTap />
      </PostsProvider>
    );
  }
  return (
    <div />
  );
};

/**
 * OtherProfileMainContent if the profile page
 *
 * @component MainContentProfile
 * @property  {function} handleClick to navigate to the subpage
 * @return {React.Component} - OtherProfileMainContent
 */

function OtherProfileMainContent() {
  const { subTitle, username } = useParams();
  return (
    <Box>
      <UserProvider name={username}>
        <ProfilePage>
          {renderSwitch(subTitle, username)}
          <UserInfoProvider name={username}>
            <OtherProfileSidebar />
          </UserInfoProvider>
        </ProfilePage>
      </UserProvider>
    </Box>
  );
}

export default OtherProfileMainContent;