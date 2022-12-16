/* eslint-disable import/no-cycle */
import { useContext, useState } from 'react';

// mui components
import { Box, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

// Componenets
import AuthenticationHeader from '../../../../Authentication/AuthenticationHeader/AuthenticationHeader';
import ThirdParty from '../../ِAuthentication/ThirdParty/ThirdParty';
import Divider from '../../../../Authentication/Divider/Divider';
import Email from '../../ِAuthentication/Email/Email';

// contexts
import { SignupContext } from '../../SignNavbar';

// styles
import { StyledDialog } from '../../styles';
import { StyledLink } from '../../../../Authentication/styles';

// eslint-disable-next-line no-unused-vars
function SignUpPopUpEmail({ setUserNamePage, email, setEmail }) {
  // states
  const [loading, setLoading] = useState(false);

  // useContext
  const {
    // eslint-disable-next-line no-unused-vars
    openSignUp, handleClose, handleClickOpenLogIn, handleClickOpenSignUp, openSignUpUsername, handleClickOpenSignUpUsername,
  } = useContext(SignupContext);

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

  const continueEmail = () => {
    console.log(email);// true value but case no change wrong value
    setLoading(true);
    // Has error (syntax error Email or empty Email)
    if (email.error !== null) {
      setLoading(false);
      return;
    }
    // check if Empty (case he didn't make any change in the input field)
    if (email.input === '') {
      setLoading(false);
      return;
    }

    // Email is Accepted
    setTimeout(() => {
      setLoading(false);
      setUserNamePage(true);
      // Change
      console.log('chhhhhhhhhhh');
      handleClickOpenSignUpUsername();
    }, 500);
  };

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
        <Email email={email} setEmail={setEmail} onSubmitFn={continueEmail} loading={loading} width="280px" buttonText="continue" fieldText="Email" recaptcha={false} setVerified={null} disabled={false} />
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

export default SignUpPopUpEmail;
