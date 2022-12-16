import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import CommunitiesSubscriberProvider from '../../../../contexts/CommunitiesSubscriberContext';
import CommunitiesProvider from '../../../../contexts/CommunitiesModeratorContext';
import CommentsTap from './CommentsTap/CommentsTap';
import Content from './Content/Content';
import FollowersList from './FollowersList/FollowersList';
import HistoryTap from './HistoryTap/HistoryTap';
import PostsFilteredTap from './PostsFilteredTap/PostsFilteredTap';
import PostsTap from './PostsTap/PostsTap';
import SavedTap from './SavedTap/SavedTap';
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
  if (param === 'upvoted' || param === 'downvoted' || param === 'hidden') {
    return (
      <PostsFilteredTap />
    );
  }
  if (param === 'saved') {
    return (
      <SavedTap />
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
      <CommunitiesProvider>
        <CommunitiesSubscriberProvider>
          <ProfilePage>
            {renderSwitch(subTitle)}
            <Sidebar />
          </ProfilePage>
        </CommunitiesSubscriberProvider>
      </CommunitiesProvider>
    </Box>
  );
}

export default ProfileMainContent;
