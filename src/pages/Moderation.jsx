import {
  Box,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import Community from '../components/Moderation/Community/Community';
import ModerationDrawer from '../components/Moderation/ModerationDrawer/ModerationDrawer';
import ModerationHeader from '../components/Moderation/ModerationHeader/ModerationHeader';
import ModerationMainPage from '../components/Moderation/ModerationMainPage/ModerationMainPage';
import Queue from '../components/Moderation/ModQueues/Queue';
import PostFlair from '../components/Moderation/Post Flair/PostFlair';
import PostsAndComments from '../components/Moderation/PostsAndComments/PostsAndComments';
import Rules from '../components/Moderation/Rules/Rules';
import Ban from '../components/Moderation/ModUserMng/Banned/BanUser';
import Approve from '../components/Moderation/ModUserMng/Approved/ApproveUser';
import Mute from '../components/Moderation/ModUserMng/Muted/MuteUser';
import Moderators from '../components/Moderation/ModUserMng/Moderators/Moderators';

const renderSwitch = (param) => {
  switch (param) {
    case 'Spam':
    case 'Edited':
    case 'Unmoderated':
      return <Queue />;
    case 'Post flair':
      return <PostFlair />;
    case 'Rules':
      return <Rules />;
    case 'Posts and Comments':
      return <PostsAndComments />;
    case 'Community':
      return <Community />;
    case 'Banned':
      return <Ban />;
    case 'Approved':
      return <Approve />;
    case 'Muted':
      return <Mute />;
    case 'Moderators':
      return <Moderators />;
    default:
      return <ModerationMainPage />;
  }
};

function Moderation() {
  const { subTitle } = useParams();
  return (
    <>
      <ModerationHeader />
      <Box sx={{ marginTop: 7 }}>
        <ModerationDrawer />
        {renderSwitch(subTitle)}

      </Box>
    </>
  );
}

export default Moderation;
