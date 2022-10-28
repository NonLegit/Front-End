import { useEffect, useState } from 'react';
import { Typography } from '@mui/material';

import {
  AuthenticationBody, FirstPartyContainer, AuthenticationInput, AuthenticationButton, StyledLink,
} from '../styles';

import AuthenticationHeader from '../AuthenticationHeader/AuthenticationHeader';
import LoadingPage from '../LoadingPage/LoadingPage';

function ForgetPassword() {
  const [remeberMe, setremeberMe] = useState(false);
  useEffect(() => {
    if (false) {
      setremeberMe(true);
    }
  }, []);

  const caption = (
    <>
      Tell us the username and email address associated with
      your Reddit account, and we’ll send you an email with a link to reset your password.
    </>
  );

  const recoverPassword = () => {
    console.log('login');
    /* BackAPI */
    // 1.Validate Email format and username
    // 2.Button becomes trick
    // 3.message appears
  };
  return (
    <AuthenticationBody mnwidth="280px" mxwidth="440px">
      {remeberMe ? <LoadingPage /> : (
        <>
          <AuthenticationHeader reddit title="Reset your password" caption={caption} fontSize="14px" />
          <FirstPartyContainer width="280px" onSubmit={recoverPassword}>
            <AuthenticationInput label="Username" variant="outlined" />
            <AuthenticationInput label="Email" variant="outlined" />

            <AuthenticationButton type="submit" width="155px">Reset Password</AuthenticationButton>
            <StyledLink href="/username" fontWeight="600" capital="uppercase">FORGOT USERNAME?</StyledLink>
          </FirstPartyContainer>
          <Typography paragraph fontSize="12px" margin="10px 0px">
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

export default ForgetPassword;
