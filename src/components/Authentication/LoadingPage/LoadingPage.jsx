import {
  AuthenticationBG, AuthenticationBody, StyledLink,
} from '../styles';
import AuthenticationHeader from '../AuthenticationHeader/AuthenticationHeader';

function LoadingPage() {
  const caption = (
    <>
      You are already logged in and will be redirected back to Reddit shortly.
      <br />
      <br />
      If you are not redirected automatically, follow
      {' '}
      <StyledLink href="google.com" fontWeight="400">this link</StyledLink>
      .
    </>
  );
  return (
    <>
      <AuthenticationBG />
      <AuthenticationBody mnwidth="280px" mxwidth="440px" />
      <AuthenticationHeader reddit title="Welcome back!" caption={caption} fontSize="14px" />
    </>
  );
}

export default LoadingPage;
