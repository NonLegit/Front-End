/* eslint-disable import/no-cycle */
import { Box, Typography } from '@mui/material';
import * as React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { ForgetPassContext } from '../SignNavbar';
// import StyledDialog from '../styles';
import {
  StyledLink, FirstPartyContainer,
  RedditTextField, RedditLoadingButton,
} from '../ِAuthentication/styles';
import AuthenticationHeader from '../../../Authentication/AuthenticationHeader/AuthenticationHeader';
import { checkUserName, recoverPassword } from './server';

import { redditCookie, checkEmail } from '../../../Authentication/authenticationServer';

import theme, { fonts } from '../../../../styles/theme';
import { StyledDialog } from '../styles';
// ultis
import { redirectLogin } from '../../../../utils/Redirect';

/**
 * ForgetPassword popUp
 * @component
 * Forget password popup different components
 * @returns {React.Component} main body of forget password popup
 */
function ForgetPassword() {
  const [loading, setLoading] = useState(false);
  const [buttonText, setbuttonText] = useState('Reset Password');
  const [disabled, setDisabled] = useState(false);
  const [redirectCaption, setRedirectCaption] = useState(false);
  const [userName, setUserName] = useState({
    input: '', color: theme.palette.neutral.main, icon: null, error: null,
  });
  const [email, setEmail] = useState({
    input: '', color: theme.palette.neutral.main, icon: null, error: null,
  });

  // cookies
  const [cookies, setCookies, removeCookie] = useCookies(['redditUser']);
  const {
    openForgotpass,
    handleClose,
    handleClickOpenForgotUser,
    handleClickOpenSignUp,
    handleClickOpenLogIn,
  } = React.useContext(ForgetPassContext);

  // useEffect
  useEffect(() => {
    // Check on Cookies
    // developememt
    /// Ask if this user already loggied in the back
    // Remove Old Cookie :)==>Of course he is signed out
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
      redirectLogin(2);
    } else {
      // No Cookie by Back End
      console.log('Remember me is set to false');
    }
  }, []);

  const caption = (
    <>
      Tell us the username and email address associated with
      your Reddit account, and we’ll send you an email with a link to reset your password.
    </>
  );

  return (
    <StyledDialog
      data-testid="forgetpass-popup"
      fullscreen
      open={openForgotpass}
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
        <>
          <AuthenticationHeader reddit={false} title="Reset your password" caption={caption} fontSize="14px" />
          <FirstPartyContainer
            width="280px"
            noValidate
            onSubmit={(e) => {
              e.preventDefault(); recoverPassword(
                setLoading,
                email,
                setEmail,
                userName,
                setUserName,
                setDisabled,
                setbuttonText,
                setRedirectCaption,
              );
            }}
          >
            <RedditTextField
              label="Username"
              variant="filled"
              type="text"
              required
              InputProps={{
                endAdornment: (
                  userName.icon
                ),
                disableUnderline: true,
              }}
              clr={userName.color}
              onChange={(e) => {
                setUserName((prevState) => ({
                  ...prevState,
                  input: e.target.value.trim(),
                }));
                checkUserName(e.target.value.trim(), userName.error, setUserName);
              }}
              helperText={userName.error}
            />

            <RedditTextField
              label="Email Address"
              variant="filled"
              required
              InputProps={{
                endAdornment: (
                  email.icon
                ),
                disableUnderline: true,
              }}
              clr={email.color}
              onChange={(e) => {
                setEmail((prevState) => ({
                  ...prevState,
                  input: e.target.value.trim(),
                }));
                checkEmail(e.target.value.trim(), setEmail);
              }}
              helperText={email.error}
            />
            <RedditLoadingButton
              type="submit"
              width="155px"
              loading={loading}
              disabled={disabled}
            >
              {buttonText}
            </RedditLoadingButton>
            {redirectCaption
              ? (
                <Typography color="primary" fontSize="12px" fontFamily={fonts['system-ui']} fontWeight="600" margin="20px 0px">
                  Thanks! If your Reddit username and email address match, you’ll get an email with a link to reset your password shortly.
                </Typography>
              )
              : null}
            <StyledLink
              data-testid="forgetpass-forgetuser"
              onClick={handleClickOpenForgotUser}
              fontWeight="600"
              capital="uppercase"
            >
              FORGOT USERNAME?

            </StyledLink>
          </FirstPartyContainer>
          <Typography paragraph fontSize="12px" margin="10px 0px">
            Don
            {'\''}
            t have an email or need assistance logging in? GET HELP
          </Typography>

          <Typography paragraph fontSize="12px" marginTop="10px" color="#3394DC">
            <StyledLink
              data-testid="forgetpass-login"
              onClick={handleClickOpenLogIn}
              fontWeight="600"
              capital="uppercase"
            >
              log in

            </StyledLink>
            {' • '}
            <StyledLink
              data-testid="forgetpass-signup"
              onClick={handleClickOpenSignUp}
              fontWeight="600"
              capital="uppercase"
            >
              sign up

            </StyledLink>
          </Typography>
        </>
      </Box>
    </StyledDialog>
  );
}

export default ForgetPassword;
