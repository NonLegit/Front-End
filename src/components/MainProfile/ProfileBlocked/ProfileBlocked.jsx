import { useNavigate } from 'react-router-dom';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import { Typography } from '@mui/material';
import {
  BlockedBox, BlockedButton, BlockedIcon, Icon, Image,
} from './styles';

function ProfileBlocked({ username, handleCont }) {
  const navigate = useNavigate();

  return (
    <BlockedBox>
      <Image src="/back.jpg" />
      <Icon src="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_7.png" />
      <BlockedIcon size="small" sx={{ backgroundColor: 'red', color: 'white' }}>
        <PersonOffIcon fontSize="string" />
      </BlockedIcon>
      <Typography sx={{ fontWeight: 700, marginTop: 1, fontSize: 22 }}>
        u/
        {username}
        {' '}
        is blocked
      </Typography>
      <Typography variant="body2" sx={{ marginTop: 2, marginBottom: 4 }}>Are you sure you want to continue to their profile?</Typography>
      <BlockedButton variant="contained" onClick={handleCont}>Continue</BlockedButton>
      <BlockedButton variant="outlined" onClick={() => { navigate(-1); }}>Go Back</BlockedButton>
    </BlockedBox>
  );
}

export default ProfileBlocked;
