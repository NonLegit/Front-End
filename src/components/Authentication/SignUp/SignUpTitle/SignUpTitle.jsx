import { Typography, Link } from '@mui/material';
import { AuthenticationTitle, AuthenticationHeader } from '../../AuthenticationConatiners/styles';

function SignUpTitle() {
  return (
    <AuthenticationTitle height="100px" width="280px">
      <AuthenticationHeader variant="h1">Sign up</AuthenticationHeader>
      <Typography fontSize="12px">
        By continuing, you are setting up a Reddit account
        and agree to our
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

export default SignUpTitle;
