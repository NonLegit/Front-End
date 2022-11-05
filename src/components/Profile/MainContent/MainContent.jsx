import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import Content from './Content/Content';
import Sidebar from './Sidebar/Sidebar';
import ProfilePage from './styles';

const renderSwitch = (param) => {
  if (param === undefined || param.includes('sort')) {
    return (
      <ProfilePage>
        <Content />
        <Sidebar />
      </ProfilePage>
    );
  }

  return (
    <ProfilePage />
  );
};

function MainContent() {
  const { subTitle } = useParams();
  return (
    <Box>{renderSwitch(subTitle)}</Box>
  );
}

export default MainContent;
