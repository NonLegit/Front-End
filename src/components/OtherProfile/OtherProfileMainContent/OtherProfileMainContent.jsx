import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import ContentProvider from '../../../contexts/ContentProvider';
import PostsProvider from '../../../contexts/PostsProvider';
import UserProvider from '../../../contexts/UserProvider';
import UserInfoProvider from '../../../contexts/UserInfoProvider';
import OtherProfileContent from './OtherProfileContent/OtherProfileContent';
import OtherProfilePostsTap from './OtherProfilePostsTap/OtherProfilePostsTap';
import OtherProfileSidebar from './OtherProfileSidebar/OtherProfileSidebar';
import { ProfilePage } from './styles';
import CommunitiesProvider from '../../../contexts/CommunitiesProvider';

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
          <UserInfoProvider>
            <CommunitiesProvider>
              <OtherProfileSidebar />
            </CommunitiesProvider>
          </UserInfoProvider>
        </ProfilePage>
      </UserProvider>
    </Box>
  );
}

export default OtherProfileMainContent;
