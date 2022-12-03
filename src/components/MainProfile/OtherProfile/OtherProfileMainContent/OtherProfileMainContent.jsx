import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import UserProvider from '../../../../contexts/UserProvider';
import OtherProfileContent from './OtherProfileContent/OtherProfileContent';
import OtherProfilePostsTap from './OtherProfilePostsTap/OtherProfilePostsTap';
import OtherProfileSidebar from './OtherProfileSidebar/OtherProfileSidebar';
import { ProfilePage } from './styles';

const renderSwitch = (param) => {
  if (param === undefined || param === 'sort=new' || param === 'sort=hot' || param === 'sort=top' || param === 'sort=top&t=day') {
    return (
      <OtherProfileContent />
    );
  }

  if (param === 'submitted') {
    return (
      <OtherProfilePostsTap />
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
          {renderSwitch(subTitle)}
          <OtherProfileSidebar />
        </ProfilePage>
      </UserProvider>
    </Box>
  );
}

export default OtherProfileMainContent;
