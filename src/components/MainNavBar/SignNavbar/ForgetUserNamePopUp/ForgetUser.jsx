/* eslint-disable import/no-cycle */
import { Box, Typography } from '@mui/material';
import * as React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

import { ForgetUserContext } from '../SignNavbar';
import { StyledDialog } from '../styles';
import { StyledLink } from '../ِAuthentication/styles';
import AuthenticationHeader from '../../../Authentication/AuthenticationHeader/AuthenticationHeader';
import Email from '../ِAuthentication/Email/Email';
import { recoverUsername } from './server';

import { redditCookie } from '../../../Authentication/authenticationServer';

import theme, { fonts } from '../../../../styles/theme';
// utlis
import { redirectHome } from '../../../../utils/Redirect';
// // environment variables
// const { REACT_APP_ENV } = process.env;
/**
 *  ForgetUsername popUp
 * @component
 * forget username popup different components
 * @returns {React.Component} main body of forget username popup
 */
function ForgetUsername() {
  // states
  const [email, setEmail] = useState({
    input: '', color: theme.palette.neutral.main, icon: null, error: null,
  });
  const [loading, setLoading] = useState(false);
  const [verified, setVerified] = useState(false);
  const [buttonText, setbuttonText] = useState('Email Me');
  const [disabled, setDisabled] = useState(false);
  const [redirectCaption, setRedirectCaption] = useState(false);
  // cookies
  const [cookies, setCookies, removeCookie] = useCookies(['redditUser']);

  const {
    openForgotUser,
    handleClose,
    handleClickOpenSignUp,
    handleClickOpenLogIn,
  } = React.useContext(ForgetUserContext);

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
      redirectHome(2);
    } else {
      // No Cookie by Back End
      console.log('Remember me is set to false');
    }
  }, []);

  const caption = (
    <>
      Tell us the email address associated with your Reddit account, and we’ll
      send you an email with your username.
    </>
  );

  return (
    <StyledDialog
      data-testid="forgetuser-popup"
      fullScreen
      open={openForgotUser}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <Box width="280px" height="326px">
        <CloseIcon
          sx={{
            position: 'absolute', right: '16px', top: '16px', cursor: 'pointer',
          }}
          onClick={handleClose}
        />
        <AuthenticationHeader reddit={false} title="Recover your username" caption={caption} fontSize="14px" />
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
          isPopUp={false}
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
          <StyledLink
            data-testid="forgetuser-login"
            onClick={handleClickOpenLogIn}
            fontWeight="600"
            capital="uppercase"
          >
            log in

          </StyledLink>
          {' • '}
          <StyledLink
            data-testid="forgetuser-signup"
            onClick={handleClickOpenSignUp}
            fontWeight="600"
            capital="uppercase"
          >
            sign up

          </StyledLink>
        </Typography>
      </Box>
    </StyledDialog>
  );
}

export default ForgetUsername;
