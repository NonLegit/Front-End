import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

// mui components
import { Typography } from '@mui/material';

// componenents
import AuthenticationHeader from '../AuthenticationHeader/AuthenticationHeader';
import LoadingPage from '../LoadingPage/LoadingPage';
import Email from '../Email/Email';

// styles
import { AuthenticationBody, StyledLink } from '../styles';
import theme, { fonts } from '../../../styles/theme';

// server

import { recoverUsername } from './forgetUsernameServer';

// scripts
import { redditCookie } from '../authenticationServer';

// environment variables
// const { REACT_APP_ENV } = process.env;

/**
 * Component for Forget Username Page
 *
 * @component
 * @returns {React.Component} --Forget Username page
 */

function ForgetUsername() {
  // states
  const [email, setEmail] = useState({
    input: '', color: theme.palette.neutral.main, icon: null, error: null,
  });
  const [remeberMe, setremeberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [verified, setVerified] = useState(false);
  const [buttonText, setbuttonText] = useState('Email Me');
  const [disabled, setDisabled] = useState(false);
  const [redirectCaption, setRedirectCaption] = useState(false);

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
      setremeberMe(true);
    } else {
      // No Cookie by Back End
      console.log('Remember me is set to false');
      setremeberMe(false);
    }
  }, []);

  const caption = (
    <>
      Tell us the email address associated with your Reddit account, and we’ll
      send you an email with your username.
    </>
  );

  return (
    <AuthenticationBody mnwidth="280px" mxwidth="440px" data-testid="forgetusername-test">
      {remeberMe ? <LoadingPage /> : (
        <>
          <AuthenticationHeader reddit title="Recover your username" caption={caption} fontSize="14px" />
          <Email
            email={email}
            setEmail={setEmail}
            onSubmitFn={() => recoverUsername(setLoading, email, verified, setDisabled, setbuttonText, setRedirectCaption)}
            loading={loading}
            buttonText={buttonText}
            btnWidth="155px"
            fieldText="Email Address"
            recaptcha
            setVerified={setVerified}
            disabled={disabled}
          />

          {redirectCaption
            ? <Typography color="primary" fontSize="12px" fontFamily={fonts['system-ui']} fontWeight="600" margin="20px 0px" data-testid="forgetusername-redirect-caption-test">Thanks! If there are any Reddit accounts associated with that email address, you’ll get an email with your usernames(s) shortly</Typography>
            : null}
          <Typography paragraph fontSize="12px" margin="0px 0px 10px 0px">
            Don
            {'\''}
            t have an email or need assistance logging in? GET HELP
          </Typography>

          <Typography paragraph fontSize="12px" marginTop="10px" color="#3394DC">
            <StyledLink href="/login" fontWeight="600" capital="uppercase">log in</StyledLink>
            {' • '}
            <StyledLink href="/register" fontWeight="600" capital="uppercase">sign up</StyledLink>
          </Typography>
        </>
      )}
    </AuthenticationBody>
  );
}

export default ForgetUsername;
