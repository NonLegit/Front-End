import {
  Box,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import ModerationDrawer from '../components/Moderation/ModerationDrawer/ModerationDrawer';
import ModerationHeader from '../components/Moderation/ModerationHeader/ModerationHeader';
import ModerationMainPage from '../components/Moderation/ModerationMainPage/ModerationMainPage';
import Queue from '../components/Moderation/ModQueues/Queue';
import Ban from '../components/Moderation/ModUserMng/Banned/BanUser';
import Approve from '../components/Moderation/ModUserMng/Approved/ApproveUser';
import Mute from '../components/Moderation/ModUserMng/Muted/MuteUser';

const renderSwitch = (param) => {
  switch (param) {
    case 'Spam':
    case 'Edited':
    case 'Unmoderated':
      return <Queue subTitle={param} />;
    case 'Banned':
      return <Ban />;
    case 'Approved':
      return <Approve />;
    case 'Muted':
      return <Mute />;
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
