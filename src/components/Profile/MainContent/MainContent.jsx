import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import Content from './Content/Content';
import Sidebar from './Sidebar/Sidebar';
import ProfilePage from './styles';

const renderSwitch = (param, username, karma, cake, followers) => {
  if (param === undefined || param.includes('sort')) {
    return (
      <ProfilePage>
        <Content username={username} />
        <Sidebar username={username} karma={karma} cake={cake} followers={followers} />
      </ProfilePage>
    );
  }

  return (
    <ProfilePage />
  );
};

function MainContent() {
  const username = 'NourZiad';
  const karma = 2;
  const cake = 'October 5, 2022';
  const followers = 3;
  const { subTitle } = useParams();
  return (
    <Box>{renderSwitch(subTitle, username, karma, cake, followers)}</Box>
  );
}

export default MainContent;
