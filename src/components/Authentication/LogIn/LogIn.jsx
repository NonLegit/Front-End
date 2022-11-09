import { useEffect, useState } from 'react';
import { Typography } from '@mui/material';

import { AuthenticationBody, StyledLink } from '../styles';

import LoadingPage from '../LoadingPage/LoadingPage';
import AuthenticationHeader from '../AuthenticationHeader/AuthenticationHeader';
import ThirdParty from '../ThirdParty/ThirdParty';
import Divider from '../Divider/Divider';
import FirstParty from '../FirstParty/FirstParty';

function LogIn() {
  const [remeberMe, setRemeberMe] = useState(false);

  useEffect(() => {
    // Check fot Cokkies sent by Back
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
          <ThirdParty circular={false} />
          <Divider />

          <FirstParty />

          <Typography paragraph fontSize="12px" fontFamily="ibm-plex-sans,sans-serif">
            Forgot your
            {' '}
            <StyledLink href="/username" fontWeight="400" capital="none">username</StyledLink>
            {' or '}
            <StyledLink href="/password" fontWeight="400" capital="none">password</StyledLink>
            {' ?'}
          </Typography>

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
