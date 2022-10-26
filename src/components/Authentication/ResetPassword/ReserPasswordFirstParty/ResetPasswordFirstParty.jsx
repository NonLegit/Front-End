import { Typography, Checkbox } from '@mui/material';
import {
  FirstPartyContainer, AuthenticationInput, AuthenticationButton, StyledLink,
} from '../../AuthenticationConatiners/styles';
import { CheckBoxConatiner } from './styles';

function ResetPasswordFirstParty() {
  const ResetPassword = () => {
    // Check nonempty inputfileds
    console.log('ResetPassword');
    /* BackAPI */
    // 1.Take the info of user url**
    // 2.check Password must be at least 8 characters long
    // 3.Message appears at the bottom
    // 4.Redirected to loginpage
  };
  return (
    <FirstPartyContainer mnwidth="260px" mxwidth="440px" onSubmit={ResetPassword}>
      <AuthenticationInput label="New Password" variant="outlined" />
      <AuthenticationInput label="Verify Password" variant="outlined" />

      <CheckBoxConatiner>
        <Checkbox sx={{ padding: '0px 5px 0px 0px' }} />
        <Typography fontSize="12px" fontWeight="400" fontFamily="ibm-plex-sans,sans-serif">
          Changing your password logs you out of all browsers on your device(s).
          {' '}
          Checking this box also logs you out of all apps you have authorized.
        </Typography>
      </CheckBoxConatiner>
      <AuthenticationButton type="submit" width="155px">Set Password</AuthenticationButton>
      <Typography paragraph fontSize={12} color="#3394DC" marginTop="10px">
        <StyledLink href="/login" capital="uppercase" fontWeight="600">log in</StyledLink>
        {' • '}
        <StyledLink href="/register" capital="uppercase" fontWeight="600">sign up</StyledLink>
      </Typography>
    </FirstPartyContainer>
  );
}

export default ResetPasswordFirstParty;
