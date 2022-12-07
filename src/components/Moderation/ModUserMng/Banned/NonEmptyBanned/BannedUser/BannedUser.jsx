import { Box, Avatar, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { UserBar } from './styles';
import { UserMngButton } from '../../../styles';

function BannedUser() {
  return (
    <UserBar>
      <Box sx={{ display: 'flex', alignItems: 'center', padding: '8px 16px' }}>
        <Avatar />
        <Typography
          padding="8px"
          fontSize="15px"
          fontWeight="bold"
        >
          username
        </Typography>
      </Box>
      <Typography
        padding="8px"
        fontSize="12px"
        color="#878A8C"
      >
        2 hours ago (Permanent)
      </Typography>
      <Typography
        padding="8px"
        fontSize="12px"
        color="#878A8C"
      >
        •
      </Typography>
      <Typography
        padding="8px"
        fontSize="12px"
        color="#878A8C"
      >
        Spam
      </Typography>
      <UserMngButton
        disableRipple
        disableFocusRipple
      >
        Edit
      </UserMngButton>
      <UserMngButton
        disableRipple
        disableFocusRipple
        endIcon={<KeyboardArrowDownIcon />}
      >
        More Details
      </UserMngButton>
    </UserBar>
  );
}

export default BannedUser;
