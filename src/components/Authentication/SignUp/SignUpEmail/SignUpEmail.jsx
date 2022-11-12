import { useState } from 'react';

// mui compoenets
import { Typography } from '@mui/material';

// components
import AuthenticationHeader from '../../AuthenticationHeader/AuthenticationHeader';
import ThirdParty from '../../ThirdParty/ThirdParty';
import Divider from '../../Divider/Divider';
import Email from '../../Email/Email';

// styles
import { AuthenticationBG, AuthenticationBody, StyledLink } from '../../styles';

/**
 * SignUp Username and Password Page View
 *
 * @component
 * @property {function} --setUserNamePage setView to Email Page on Back Button Click
 * @property {object} --email email taken from user to sign up with
 * @property {function} --setEmail set email taken from user
 * @returns {React.Component} Email SignUp Component
 */
function SignUpEmail({ setUserNamePage, email, setEmail }) {
  // states
  const [loading, setLoading] = useState(false);

  const continueEmail = () => {
    // console.log(email);// true value but case no change wrong value
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
        <Email email={email} setEmail={setEmail} onSubmitFn={continueEmail} loading={loading} width="280px" buttonText="continue" fieldText="Email" recaptcha={false} setVerified={null} disabled={false} />
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
