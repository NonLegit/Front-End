/* eslint-disable import/no-cycle */
import { Typography, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import * as React from 'react';
import StyledDialog from '../SignUpPopUp/styles';
import { StyledLink } from '../ِAuthentication/styles';
import AuthenticationHeader from '../../Authentication/AuthenticationHeader/AuthenticationHeader';
import ThirdParty from '../ِAuthentication/ThirdParty/ThirdParty';
import Divider from '../../Authentication/Divider/Divider';
import FirstParty from '../ِAuthentication/FirstParty/FirstParty';
import { LoginContext } from '../SNavbar';

/**
 *  LogIn popUp
 * @component
 * Login popup Differenet Components
 * @returns {React.Component} - Main Body of Login Page
 */
function LogIn() {
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

  const {
    openLogIn,
    handleClose,
    handleClickOpenForgotUser,
    handleClickOpenForgotPass,
    handleClickOpenSignUp,
  } = React.useContext(LoginContext);

  return (
    <StyledDialog
      data-testid="login-popup"
      fullscreen
      open={openLogIn}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <Box width="280px" height="454px">
        <CloseIcon
          sx={{
            position: 'absolute', right: '16px', top: '16px', cursor: 'pointer',
          }}
          onClick={handleClose}
        />
        <AuthenticationHeader reddit={false} title="Log in" caption={caption} />
        <ThirdParty circular={false} />
        <Divider />
        <FirstParty />
        <Typography paragraph fontSize="12px" fontFamily="ibm-plex-sans,sans-serif">
          Forgot your
          {' '}
          <StyledLink onClick={handleClickOpenForgotUser} data-testid="login-forgetuser" fontWeight="400" capital="none">username</StyledLink>
          {' or '}
          <StyledLink onClick={handleClickOpenForgotPass} data-testid="login-forgetpass" fontWeight="400" capital="none">password</StyledLink>
          {' ?'}
        </Typography>

        <Typography paragraph fontSize={12}>
          New to Reddit?
          {' '}
          <StyledLink onClick={handleClickOpenSignUp} data-testid="login-signup" fontWeight="600" capital="uppercase">sign up</StyledLink>
        </Typography>
      </Box>
    </StyledDialog>
  );
}

export default LogIn;
