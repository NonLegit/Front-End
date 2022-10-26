import { Typography } from '@mui/material';
import { AuthenticationTitle, AuthenticationHeader } from '../../AuthenticationConatiners/styles';

function ResetPasswordTitle() {
  return (
    <AuthenticationTitle height="100px" mnwidth="260px" mxwidth="440px">
      <img src="https://www.redditstatic.com/accountmanager/18e257d5fdea817c0f12cccf8867d930.svg" alt="Reddit" width="40px" />
      <AuthenticationHeader variant="h1" margin="10px 0px">Reset your password</AuthenticationHeader>
      <Typography fontSize="12px" fontFamily="Noto Sans,sans-serif">Choose a new password here, then log in to your account.</Typography>
    </AuthenticationTitle>
  );
}

export default ResetPasswordTitle;
