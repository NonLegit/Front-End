import { Typography } from '@mui/material';
import { AuthenticationTitle, AuthenticationHeader } from '../../AuthenticationConatiners/styles';

function ForgetPasswordTitle() {
  return (
    <AuthenticationTitle height="100px" mnwidth="260px" mxwidth="440px">
      <img src="https://www.redditstatic.com/accountmanager/18e257d5fdea817c0f12cccf8867d930.svg" alt="Reddit" width="40px" />
      <AuthenticationHeader variant="h1" margin="10px 0px">Reset your password</AuthenticationHeader>
      <Typography fontSize="12px" fontFamily="Noto Sans,sans-serif">
        Tell us the username and email address associated with your Reddit account, and we
        {'\''}
        ll send you an email with a link to reset your password.
      </Typography>
    </AuthenticationTitle>
  );
}

export default ForgetPasswordTitle;
