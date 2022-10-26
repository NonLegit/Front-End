import { Typography } from '@mui/material';
import {
  FirstPartyContainer, AuthenticationInput, AuthenticationButton, StyledLink,
} from '../../AuthenticationConatiners/styles';

function ForgetPasswordFirstParty() {
  const RecoverPassword = () => {
    // Check nonempty inputfileds
    console.log('RecoverPassword');
    /* BackAPI */
  };
  return (
    <FirstPartyContainer mnwidth="260px" mxwidth="440px" onSubmit={RecoverPassword}>
      <AuthenticationInput label="Username" variant="outlined" />
      <AuthenticationInput label="Email" variant="outlined" />

      <AuthenticationButton type="submit" width="155px">Reset Password</AuthenticationButton>
      <StyledLink href="/username" fontSize="12px" fontFamily="ibm-plex-sans,sans-serif" capital="uppercase">FORGOT USERNAME?</StyledLink>
      <Typography paragraph fontSize="12px" fontFamily="ibm-plex-sans,sans-serif" marginTop="20px">
        Don
        {'\''}
        t have an email or need assistance logging in? GET HELP
      </Typography>

      <Typography paragraph fontSize={12} color="#3394DC" marginTop="10px">
        <StyledLink href="/login" capital="uppercase">log in</StyledLink>
        {' • '}
        <StyledLink href="/register" capital="uppercase">sign up</StyledLink>
      </Typography>
    </FirstPartyContainer>
  );
}

export default ForgetPasswordFirstParty;
