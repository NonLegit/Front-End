/* eslint-disable import/no-cycle */
import { Box, Typography } from '@mui/material';
import * as React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { ForgetUserContext } from '../SNavbar';
import StyledDialog from '../SignUpPopUp/styles';
import { StyledLink } from '../ِAuthentication/styles';
import AuthenticationHeader from '../ِAuthentication/AuthenticationHeader/AuthenticationHeader';
import Email from '../ِAuthentication/Email/Email';

/**
 *  ForgetUsername popUp
 * @component
 * forget username popup different components
 * @returns {React.Component} main body of forget username popup
 */
function ForgetUsername() {
  const [loading, setLoading] = React.useState(false);
  const {
    openForgotUser,
    handleClose,
    handleClickOpenSignUp,
    handleClickOpenLogIn,
  } = React.useContext(ForgetUserContext);

  const caption = (
    <>
      Tell us the email address associated with your Reddit account, and we’ll
      send you an email with your username.
    </>
  );

  const recoverUsername = () => {
    // Check nonempty inputfileds
    console.log('RecoverUsername');
    setLoading(true);
    /* BackAPI */
    // 1.Validate Email format and username
    // 2.Button becomes trick
    // 3.message appears
  };
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
        <Email onSubmitFn={recoverUsername} loading={loading} isPopUp={false} buttonText="Email Me" btnWidth="155px" />

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
