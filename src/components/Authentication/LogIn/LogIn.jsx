import { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import {
  AuthenticationBody, FirstPartyContainer, StyledLink,
  RedditTextField, RedditLoadingButton,
} from '../styles';
import AuthenticationHeader from '../AuthenticationHeader/AuthenticationHeader';
// import { ThirdPartyContainer } from '../../ThirdParty/ThirdPartyButton/styles';
// import ThirdPartyButton from '../../ThirdParty/ThirdPartyButton/ThirdPartyButton';
import Divider from '../Divider/Divider';

import LoadingPage from '../LoadingPage/LoadingPage';

import { checkUserNameLogin, logIn } from '../scripts';
import theme, { fonts } from '../../../styles/theme';
// import Google from '../../../assets/images/google.png';
// import Facebook from '../../../assets/images/facebook.png';
import ThirdParty from '../../ThirdParty/ThirdParty';

function LogIn() {
  const [remeberMe, setRemeberMe] = useState(false);

  const [buttonTxt, setButtonText] = useState('Log In');
  const [userName, setUserName] = useState({
    input: '', color: theme.palette.neutral.main, icon: null, error: null,
  });
  const [password, setPassword] = useState({
    input: '', color: theme.palette.neutral.main, icon: null, error: null,
  });
  const [redirectCaption, setRedirectCaption] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setButtonText('Log in');
    // const item = localStorage.getItem('Reddit_user');
    // if (item != null) {
    //   setRemeberMe(true);
    //   setTimeout(() => {
    //     window.location.href = './';
    //   }, 1000);
    // }
    setRemeberMe(false);
  }, []);

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

  return (
    <AuthenticationBody mnwidth="290px" mxwidth={remeberMe ? '440px' : '290px'}>
      {remeberMe ? <LoadingPage /> : (
        <>
          <AuthenticationHeader reddit={false} title="Log in" caption={caption} />
          <ThirdParty />
          <Divider />
          <FirstPartyContainer
            width="290px"
            onSubmit={(event) => logIn(
              event,
              userName,
              setUserName,
              password,
              setPassword,
              setLoading,
              setButtonText,
              setRedirectCaption,
            )}
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
              onBlur={() => checkUserNameLogin(userName, setUserName)}
              onChange={(e) => setUserName((prevState) => ({
                ...prevState,
                input: e.target.value.trim(),
              }))}
              helperText={userName.error}
            />
            <RedditTextField
              label="Password"
              variant="filled"
              type="password"
              required
              InputProps={{
                endAdornment: (
                  password.icon
                ),
                disableUnderline: true,
              }}
              clr={password.color}
              onBlur={(e) => setPassword((prevState) => ({
                ...prevState,
                input: e.target.value.trim(),
              }))}
            />
            <RedditLoadingButton type="submit" loading={loading}>
              {buttonTxt}
            </RedditLoadingButton>
            {redirectCaption
              ? <Typography color="primary" fontSize="12px" fontFamily={fonts['system-ui']} fontWeight="600" margin="10px 0px">You are now logged in. You will soon be redirected</Typography>
              : null}
            <Typography paragraph fontSize="12px" fontFamily="ibm-plex-sans,sans-serif">
              Forgot your
              {' '}
              <StyledLink href="/username" fontWeight="400" capital="none">username</StyledLink>
              {' or '}
              <StyledLink href="/password" fontWeight="400" capital="none">password</StyledLink>
              {' ?'}
            </Typography>

          </FirstPartyContainer>

          <Typography paragraph fontSize={12}>
            New to Reddit?
            {' '}
            <StyledLink href="/register" fontWeight="600" capital="uppercase">sign up</StyledLink>
          </Typography>
        </>
      )}
    </AuthenticationBody>
  );
}

export default LogIn;
