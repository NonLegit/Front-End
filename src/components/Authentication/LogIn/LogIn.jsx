import { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import {
  AuthenticationBody, AuthenticationInput, AuthenticationButton, FirstPartyContainer, StyledLink,
} from '../AuthenticationConatiners/styles';
import AuthenticationHeader from '../AuthenticationHeader/AuthenticationHeader';
import { ThirdPartyContainer } from '../ThirdPartyButton/styles';
import ThirdPartyButton from '../ThirdPartyButton/ThirdPartyButton';
import Divider from '../Divider/Divider';

import Google from '../../../assets/images/google.png';
import Facebook from '../../../assets/images/facebook.png';
import LoadingPage from '../AuthenticationConatiners/LoadingPage';

function LogIn() {
  const [remeberMe, setremeberMe] = useState(false);
  useEffect(() => {
    if (true) {
      setremeberMe(false);
    }
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
    <AuthenticationBody mnwidth="280px" mxwidth="280px">
      {remeberMe ? <LoadingPage /> : (
        <>
          <AuthenticationHeader reddit={false} title="Log in" caption={caption} />
          <ThirdPartyContainer>
            <ThirdPartyButton img={Google} alt="Google" txt="continue with google" />
            <ThirdPartyButton img={Facebook} alt="Facebook" txt="continue with facebook" />
          </ThirdPartyContainer>
          <Divider />
          <FirstPartyContainer width="280px" onSubmit={LogIn}>
            <AuthenticationInput label="USERNAME" variant="outlined" />
            <AuthenticationInput label="PASSWORD" variant="outlined" />
            <AuthenticationButton type="submit">Log In</AuthenticationButton>
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
