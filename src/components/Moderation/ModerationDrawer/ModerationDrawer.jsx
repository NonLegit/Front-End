import {
  Box,
} from '@mui/material';
import BackupTableOutlinedIcon from '@mui/icons-material/BackupTableOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import ModBox from './ModBox/ModBox';
import {
  Navbar,
} from './styles';

function ModerationDrawer() {
  return (
    <Navbar
      variant="permanent"
    >
      <Box sx={{ overflow: 'auto', marginTop: 12 }}>
        <ModBox
          icon={<BackupTableOutlinedIcon />}
          headerText="QUEUES"
          arr={['Spam', 'Edited', 'Unmoderated']}
        />
        <ModBox
          icon={<PersonOutlineOutlinedIcon />}
          headerText="USER MANAGEMENT"
          arr={['Banned', 'Muted', 'Approved']}
        />
        <ModBox
          icon={<SellOutlinedIcon />}
          headerText="FLAIR & EMOJIES"
          arr={['Post flair']}
        />
        <ModBox
          icon={<ArticleOutlinedIcon />}
          headerText="RULES AND REGULATIONS"
          arr={['Rules', 'Removal reasons', 'Content controls']}
        />
        <ModBox
          icon={<FormatListBulletedOutlinedIcon />}
          headerText="CONTENT"
          arr={['Scheduled posts']}
        />
        <ModBox
          icon={<SettingsOutlinedIcon />}
          headerText="OTHER"
          arr={['Community', 'Posts and Comments', 'Comunity apperance']}
        />
        <ModBox
          icon={<SignalCellularAltOutlinedIcon />}
          headerText="COMMUNITY ACTIVITY"
          arr={['Traffic stats']}
        />
      </Box>
    </Navbar>
  );
}

export default ModerationDrawer;
