import { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import {
  AuthenticationBody, FirstPartyContainer, AuthenticationInput, AuthenticationButton, StyledLink,
} from '../styles';

import AuthenticationHeader from '../AuthenticationHeader/AuthenticationHeader';
import LoadingPage from '../LoadingPage/LoadingPage';

function ForgetUsername() {
  const [remeberMe, setremeberMe] = useState(false);
  useEffect(() => {
    if (false) {
      setremeberMe(true);
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
    /* BackAPI */
    // 1.Validate Email format and username
    // 2.Button becomes trick
    // 3.message appears
  };
  return (
    <AuthenticationBody mnwidth="280px" mxwidth="440px">
      {remeberMe ? <LoadingPage /> : (
        <>
          <AuthenticationHeader reddit title="Recover your username" caption={caption} fontSize="14px" />
          <FirstPartyContainer onSubmit={recoverUsername}>
            <AuthenticationInput label="Email Address" variant="outlined" />
            <AuthenticationButton type="submit" width="155px">Email Me</AuthenticationButton>
          </FirstPartyContainer>

          <Typography paragraph fontSize="12px" margin="0px 0px 10px 0px">
            Don
            {'\''}
            t have an email or need assistance logging in? GET HELP
          </Typography>

          <Typography paragraph fontSize="12px" marginTop="10px" color="#3394DC">
            <StyledLink href="/login" fontWeight="600" capital="uppercase">log in</StyledLink>
            {' • '}
            <StyledLink href="/register" fontWeight="600" capital="uppercase">sign up</StyledLink>
          </Typography>
        </>
      )}
    </AuthenticationBody>
  );
}

export default ForgetUsername;
