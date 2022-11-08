import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import Content from './Content/Content';
import Hidden from './Hidden/Hidden';
import PostsTap from './PostsTap/PostsTap';
import Saved from './Saved/Saved';
import Sidebar from './Sidebar/Sidebar';

import { ProfilePage } from './styles';
import Voted from './Voted/Voted';

const renderSwitch = (param, username) => {
  if (param === undefined || param === 'sort=new' || param === 'sort=hot' || param === 'sort=top' || param === 'sort=top&t=day') {
    return (
      <Content username={username} />
    );
  }

  if (param === 'submitted' || param === 'submitted/sort=new') {
    return (
      <PostsTap username={username} />
    );
  }
  if (param === 'upvoted' || param === 'downvoted') {
    return (
      <Voted type={param} />
    );
  }
  if (param === 'saved') {
    return (
      <Saved type={param} />
    );
  }
  if (param === 'hidden') {
    return (
      <Hidden type={param} />
    );
  }

  return (
    <>no</>
  );
};

function MainContent() {
  const username = 'NourZiad';
  const karma = 2;
  const cake = 'October 5, 2022';
  const followers = 3;
  const { subTitle } = useParams();
  return (
    <Box>
      <ProfilePage>
        {renderSwitch(subTitle, username, karma, cake, followers)}
        <Sidebar username={username} karma={karma} cake={cake} followers={followers} />
      </ProfilePage>
    </Box>
  );
}

export default MainContent;
