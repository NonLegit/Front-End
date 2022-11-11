/* eslint-disable import/no-cycle */
import { Box, Typography } from '@mui/material';
import * as React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { forgetPassContext } from '../SNavbar';
import StyledDialog from '../SignUpPopUp/styles';
import {
  StyledLink, FirstPartyContainer, AuthenticationInput, AuthenticationButton,
} from '../ِAuthentication/styles';
import AuthenticationHeader from '../ِAuthentication/AuthenticationHeader/AuthenticationHeader';

/**
 * Forget password popup different components
 * @returns {React.Component} main body of forget password popup
 */
function ForgetPassword() {
  const {
    openForgotpass,
    handleClose,
    handleClickOpenForgotUser,
    handleClickOpenSignUp,
    handleClickOpenLogIn,
  } = React.useContext(forgetPassContext);

  const caption = (
    <>
      Tell us the username and email address associated with
      your Reddit account, and we’ll send you an email with a link to reset your password.
    </>
  );

  const recoverPassword = () => {
    console.log('login');
    /* BackAPI */
    // 1.Validate Email format and username
    // 2.Button becomes trick
    // 3.message appears
  };
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
          <FirstPartyContainer width="280px" onSubmit={recoverPassword}>
            <AuthenticationInput label="Username" variant="outlined" />
            <AuthenticationInput label="Email" variant="outlined" />

            <AuthenticationButton type="submit" width="155px">Reset Password</AuthenticationButton>
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
