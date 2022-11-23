/* eslint-disable import/no-cycle */
import { Box, Typography } from '@mui/material';
import * as React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { ForgetUserContext } from '../SNavbar';
import StyledDialog from '../SignUpPopUp/styles';
import { StyledLink } from '../ِAuthentication/styles';
import AuthenticationHeader from '../ِAuthentication/AuthenticationHeader/AuthenticationHeader';
import Email from '../ِAuthentication/Email/Email';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import Cookies from 'js-cookie';
import { recoverUsername } from './server';
import { redditCookie } from '../scripts';
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
  const [remeberMe, setremeberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [verified, setVerified] = useState(false);
  const [buttonText, setbuttonText] = useState('Email Me');
  const [disabled, setDisabled] = useState(false);

  // cookies
  const [cookies, setCookies] = useCookies(['redditUser']);

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
      if (REACT_APP_ENV !== 'development' && Cookies.get('jwt')) {
        // production
        // Redirect to loading page
        // check on Reddit cookie
        if (cookies.redditUser === undefined) {
          redditCookie(setCookies);
        }
      }
    }, []);
    

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
            isPopUp = {false}
          />

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
