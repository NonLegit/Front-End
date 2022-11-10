import { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
// import { EmailConsumer } from '../../../../contexts/SignUpEmailContext';
import {
  AuthenticationBG, AuthenticationBody, rightIcon, StyledLink, wrongIcon,
} from '../../styles';
import theme from '../../../../styles/theme';

import AuthenticationHeader from '../../AuthenticationHeader/AuthenticationHeader';
import ThirdParty from '../../ThirdParty/ThirdParty';
import Divider from '../../Divider/Divider';
import Email from '../../Email/Email';

/**
 * SignUp Email Componenet
 * @returns {React.Component}
 */
function SignUpEmail({ setUserNamePage, setEmail, email }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    console.log('rerender');
  }, []);

  const continueEmail = (email) => {
    setLoading(true);
    console.log(email);
    if (email.error !== null) {
      setLoading(false);
      return;
    }

    if (email.input === '') {
      // Empty Field
      setEmail((prevState) => ({
        ...prevState,
        input: email.input,
        color: theme.palette.error.main,
        icon: wrongIcon,
        error: 'Please enter your email to continue',
      }));
      setLoading(false);
      return;
    }
    setEmail((prevState) => ({
      ...prevState,
      input: email.input,
      color: theme.palette.primary.main,
      icon: rightIcon,
      error: null,
    }));
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

  return (
    <>
      <AuthenticationBG />
      <AuthenticationBody mnwidth="280px" mxwidth="280px" data-testid="signup-email-test">
        <AuthenticationHeader reddit={false} title="Sign up" caption={caption} />
        <ThirdParty />

        <Divider />

        <Email onSubmitFn={continueEmail} loading={loading} width="280px" buttonText="continue" fieldText="Email" recaptcha={false} setVerified={null} defaultEmail={email} />
        <Typography paragraph fontSize={12}>
          Already a redditor?
          {' '}
          <StyledLink href="/login" fontWeight="600" capital="uppercase">log in</StyledLink>
        </Typography>
      </AuthenticationBody>
    </>
  );
}
export default SignUpEmail;
