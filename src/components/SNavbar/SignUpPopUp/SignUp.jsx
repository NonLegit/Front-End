/* eslint-disable import/no-cycle */
import { Box, Typography } from '@mui/material';
import { useContext, useState, useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { SignupContext } from '../SNavbar';
import StyledDialog from './styles';
import {
  StyledLink, wrongIcon,
} from '../ِAuthentication/styles';
import theme from '../../../styles/theme/index';

import AuthenticationHeader from
  '../ِAuthentication/AuthenticationHeader/AuthenticationHeader';
import ThirdParty from '../ِAuthentication/ThirdParty/ThirdParty';
import Divider from '../ِAuthentication/Divider/Divider';
import Email from '../ِAuthentication/Email/Email';
/**
 * SignUp popUp
 * @component
 * @param {setUserNamePage} param0
 * @param {setEmail} param1 used for animate the email input field
 * @returns {React.Component} sign up popup different component
 * main body of sign up popup
 */
function SignUp({ setUserNamePage, setEmail }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    console.log('rerender');
  }, []);

  const continueEmail = (event, email) => {
    setLoading(true);
    event.preventDefault();
    console.log(email);
    if (email.error !== null) {
      setLoading(false);
      return;
    }

    if (email.input === '') {
      // Empty Field
      setEmail((prevState) => ({
        ...prevState,
        color: theme.palette.error.main,
        icon: wrongIcon,
        error: 'Please enter your email to continue',
      }));
      setLoading(false);
      return;
    }
    setTimeout(() => {
      setLoading(false);
      setUserNamePage(true);
      console.log(email);
    }, 500);
  };

  const caption = (
    <>
      By continuing, you are setting up a Reddit account and agree to our
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
    openSignUp, handleClose, handleClickOpenLogIn,
  } = useContext(SignupContext);
  return (
    <StyledDialog
      data-testid="signup-popup"
      fullScreen
      open={openSignUp}
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
        <AuthenticationHeader reddit={false} title="Sign up" caption={caption} />
        <ThirdParty circular={false} />
        <Divider />
        <Email onSubmitFn={continueEmail} loading={loading} ispopup="false" width="280px" buttonText="continue" />
        <Typography paragraph fontSize={12}>
          Already a redditor?
          {' '}
          <StyledLink
            data-testid="signup-login"
            onClick={handleClickOpenLogIn}
            fontWeight="600"
            capital="uppercase"
          >
            log in

          </StyledLink>
        </Typography>
      </Box>
    </StyledDialog>
  );
}

export default SignUp;
