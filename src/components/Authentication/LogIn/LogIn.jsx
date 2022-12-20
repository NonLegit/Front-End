/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

// mui components
import { Typography } from '@mui/material';

// componenets
import LoadingPage from '../LoadingPage/LoadingPage';
import AuthenticationHeader from '../AuthenticationHeader/AuthenticationHeader';
import ThirdParty from '../ThirdParty/ThirdParty';
import Divider from '../Divider/Divider';
import FirstParty from '../FirstParty/FirstParty';

// styles
import { AuthenticationBody, StyledLink } from '../styles';

// scripts
import { redditCookie } from '../authenticationServer';

// environment variables
// const { REACT_APP_ENV } = process.env;

/**
 * Login Page Component
 * @returns {React.Component} - Main Body of Login Page
 */
function LogIn() {
  // state
  const [remeberMe, setRemeberMe] = useState(false);

  // cookies
  const [cookies, setCookies, removeCookie] = useCookies(['redditUser']);

  // useEffect
  useEffect(() => {
    // Check on Cookies
    // developememt
    /// Ask if this user already loggied in the back
    redditCookie(setCookies, removeCookie);
    // if logged in in the back end
    if (cookies.redditUser !== undefined) {
      // production
      // Update Cookie
      // redditCookie(setCookies);
      // check on Reddit cookie
      // if (cookies.redditUser === undefined) {
      //   redditCookie(setCookies);
      // }
      // Redirect to loading page
      console.log('Remember me is set to true');
      setRemeberMe(true);
    } else {
      // No Cookie by Back End
      console.log('Remember me is set to false');
      setRemeberMe(false);
    }
  }, []);

  const caption = (
    <>
      By continuing, you agree to our
      {' '}
      <StyledLink fontWeight="400" href="https://www.redditinc.com/policies/user-agreement" capital="none">User Agreement</StyledLink>
      {' '}
      and
      {' '}
      <StyledLink fontWeight="400" href="https://www.reddit.com/policies/privacy-policy" capital="none">Privacy Policy </StyledLink>
      .
    </>
  );

  return (
    <AuthenticationBody mnwidth="290px" mxwidth={remeberMe ? '440px' : '290px'} data-testid="login-test">
      {remeberMe ? <LoadingPage /> : (
        <>
          <AuthenticationHeader reddit={false} title="Log in" caption={caption} />
          <ThirdParty />
          <Divider />
          <FirstParty />
          <Typography paragraph fontSize="12px" fontFamily="ibm-plex-sans,sans-serif">
            Forgot your
            {' '}
            <StyledLink href="/username" fontWeight="400" capital="none">username</StyledLink>
            {' or '}
            <StyledLink href="/password" fontWeight="400" capital="none">password</StyledLink>
            {' ?'}
          </Typography>
          <Typography paragraph fontSize={12}>
            New to Reddit?
            {' '}
            <StyledLink href="/register" fontWeight="600" capital="uppercase">sign up</StyledLink>
          </Typography>
        </>
      )}
    </AuthenticationBody>
  );
}

export default LogIn;
