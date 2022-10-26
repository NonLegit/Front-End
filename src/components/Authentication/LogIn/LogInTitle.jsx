import { Typography } from '@mui/material';
import { AuthenticationTitle, AuthenticationHeader, StyledLink } from '../AuthenticationConatiners/styles';

function LogInTitle() {
  return (
    <AuthenticationTitle height="100px" width="100%" mnwidth="280px">
      <AuthenticationHeader variant="h1">Log in</AuthenticationHeader>
      <Typography fontSize="12px" fontFamily="Noto Sans,sans-serif">
        By continuing, you agree to our
        {' '}
        <StyledLink fontWeight="400" href="https://www.redditinc.com/policies/user-agreement" capital="none">User Agreement</StyledLink>
        {' '}
        and
        {' '}
        <StyledLink fontWeight="400" href="https://www.reddit.com/policies/privacy-policy" capital="none">Privacy Policy</StyledLink>
        .
      </Typography>
    </AuthenticationTitle>
  );
}

export default LogInTitle;
