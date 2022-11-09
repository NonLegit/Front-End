import { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';

import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import {
  AuthenticationBG, AuthenticationBody, FirstPartyContainer,
  StyledLink, RedditTextField, RedditLoadingButton,
} from '../../styles';
import AuthenticationHeader from '../../AuthenticationHeader/AuthenticationHeader';
import { ThirdPartyContainer } from '../../ThirdPartyButton/styles';
import ThirdPartyButton from '../../ThirdPartyButton/ThirdPartyButton';
import Divider from '../../Divider/Divider';

import {
  responseGoogleSuccess, responseGoogleFail, responseFacebook, checkEmail, signUpEmail,
} from '../../scripts';
import Google from '../../../../assets/images/google.png';
import Facebook from '../../../../assets/images/facebook.png';

function SignUpEmail({ setUserNamePage, email, setEmail }) {
  const clientId = '374002806091-7pces2dv4vr0vb8lchmputreqnlalqes.apps.googleusercontent.com';
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    console.log('rerender');

    // Facebook
    const initClient = () => {
      gapi.auth2.init({
        clientId,
        scope: '',
      });
    };
    gapi.load('client:auth2', initClient);
  }, []);

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
      <AuthenticationBody mnwidth="280px" mxwidth="280px">
        <AuthenticationHeader reddit={false} title="Sign up" caption={caption} />

        <ThirdPartyContainer>
          <GoogleLogin
            clientId={clientId}
            render={(renderProps) => (
              <ThirdPartyButton onClick={renderProps.onClick} img={Google} alt="Google" txt="continue with google" />
            )}
            onSuccess={responseGoogleSuccess}
            onFailure={responseGoogleFail}
            cookiePolicy="single_host_origin"
          />
          <FacebookLogin
            appId="1217433968834337"
            callback={responseFacebook}
            render={(renderProps) => (
              <ThirdPartyButton onClick={renderProps.onClick} img={Facebook} alt="Facebook" txt="continue with facebook" />
            )}
          />
        </ThirdPartyContainer>

        <Divider />

        <FirstPartyContainer width="280px" onSubmit={(event) => signUpEmail(event, email, setEmail, setUserNamePage, setLoading)} noValidate>
          <RedditTextField
            label="Email"
            variant="filled"
            required
            InputProps={{
              endAdornment: (
                email.icon
              ),
              disableUnderline: true,
            }}
            clr={email.color}
            onBlur={() => checkEmail(email, setEmail)}
            onChange={(e) => setEmail((prevState) => ({
              ...prevState,
              input: e.target.value.trim(),
            }))}
            helperText={email.error}
          />
          <RedditLoadingButton type="submit" loading={loading}>
            continue
          </RedditLoadingButton>
        </FirstPartyContainer>

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
