import { useEffect } from 'react';
import { Typography, Checkbox } from '@mui/material';
import {
  AuthenticationBody, FirstPartyContainer, AuthenticationInput, AuthenticationButton, StyledLink,
} from '../styles';

import AuthenticationHeader from '../AuthenticationHeader/AuthenticationHeader';
import { CheckBoxConatiner } from './styles';

function ResetPassword() {
  useEffect(() => {
  }, []);

  const caption = (
    <>
      Choose a new password here, then log in to your account.
    </>
  );

  const resetPassword = () => {
    // Check nonempty inputfileds
    console.log('ResetPassword');
    /* BackAPI */
    // 1.Take the info of user url**
    // 2.check Password must be at least 8 characters long
    // 3.Message appears at the bottom
    // 4.Redirected to loginpage
  };
  return (
    <AuthenticationBody mnwidth="280px" mxwidth="440px">
      <AuthenticationHeader reddit title="Reset your password" caption={caption} fontSize="14px" />
      <FirstPartyContainer onSubmit={resetPassword}>
        <AuthenticationInput label="New Password" variant="outlined" />
        <AuthenticationInput label="Verify Password" variant="outlined" />
        <CheckBoxConatiner>
          <Checkbox sx={{ padding: '0px 5px 0px 0px' }} />
          <Typography fontSize="12px" fontWeight="400">
            Changing your password logs you out of all browsers on your device(s).
            {' '}
            Checking this box also logs you out of all apps you have authorized.
          </Typography>
        </CheckBoxConatiner>
        <AuthenticationButton type="submit" width="155px">set Password</AuthenticationButton>
      </FirstPartyContainer>
      <Typography paragraph fontSize="12px" marginTop="10px" color="#3394DC">
        <StyledLink href="/login" fontWeight="600" capital="uppercase">log in</StyledLink>
        {' • '}
        <StyledLink href="/register" fontWeight="600" capital="uppercase">sign up</StyledLink>
      </Typography>
    </AuthenticationBody>
  );
}

export default ResetPassword;
