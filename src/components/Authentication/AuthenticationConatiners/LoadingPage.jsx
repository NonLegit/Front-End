import { Typography } from '@mui/material';
import {
  AuthenticationTitle,
  AuthenticationHeader,
  StyledLink,
} from './styles';

function LoadingPage() {
  return (
    <div style={{ margin: 'auto 0px' }}>
      <AuthenticationTitle height="100px" mnwidth="260px" mxwidth="440px">
        <img src="https://www.redditstatic.com/accountmanager/18e257d5fdea817c0f12cccf8867d930.svg" alt="Reddit" width="40px" />
        <AuthenticationHeader variant="h1" margin="10px 0px">Welcome back!</AuthenticationHeader>
        <Typography fontSize="14px" fontFamily="Noto Sans,sans-serif" fontWeight={400}>
          You are already logged in and will be redirected back to Reddit shortly.
        </Typography>
        <Typography fontSize="14px" fontFamily="Noto Sans,sans-serif" fontWeight={400}>
          If you are not redirected automatically, follow
          {' '}
          <StyledLink href="google.com" fontWeight="400">this link.</StyledLink>
        </Typography>
      </AuthenticationTitle>
    </div>
  );
}

export default LoadingPage;
