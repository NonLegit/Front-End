import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import CommentsTap from './CommentsTap/CommentsTap';
import Content from './Content/Content';
import FollowersList from './FollowersList/FollowersList';
import HistoryTap from './HistoryTap/HistoryTap';
import PostsFilteredTap from './PostsFilteredTap/PostsFilteredTap';
import PostsTap from './PostsTap/PostsTap';
import Sidebar from './Sidebar/Sidebar';
import { ProfilePage } from './styles';

const renderSwitch = (param) => {
  if (param === undefined || param === '?sort=new' || param === '?sort=hot' || param === '?sort=top' || param === '?sort=top&t=day') {
    return (
      <Content />
    );
  }

  if (param === 'submitted' || param === 'submitted/?sort=new') {
    return (
      <PostsTap />
    );
  }
  if (param === 'upvoted' || param === 'downvoted' || param === 'saved' || param === 'hidden') {
    return (
      <PostsFilteredTap />
    );
  }
  if (param === 'history') {
    return (
      <HistoryTap />
    );
  }
  if (param === 'comments') {
    return (
      <CommentsTap />
    );
  }
  if (param === 'followers') {
    return (
      <FollowersList />
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
  const { subTitle } = useParams();
  return (
    <Box>
      <ProfilePage>
        {renderSwitch(subTitle)}
        <Sidebar />
      </ProfilePage>
    </Box>
  );
}

export default ProfileMainContent;
