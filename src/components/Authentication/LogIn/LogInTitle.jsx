import { Typography, Link } from '@mui/material';
import { AuthenticationTitle, AuthenticationHeader } from '../AuthenticationConatiners/styles';

function LogInTitle() {
  return (
    <AuthenticationTitle height="100px" width="100%" mnwidth="280px">
      <AuthenticationHeader variant="h1">Log in</AuthenticationHeader>
      <Typography fontSize="12px" fontFamily="Noto Sans,sans-serif">
        By continuing, you agree to our
        {' '}
        <Link href="https://www.redditinc.com/policies/user-agreement" underline="none">User Agreement</Link>
        {' '}
        and
        {' '}
        <Link href="https://www.reddit.com/policies/privacy-policy" underline="none">Privacy Policy</Link>
        .
      </Typography>
    </AuthenticationTitle>
  );
}

export default LogInTitle;
