import { Typography } from '@mui/material';
import {
  FirstPartyContainer, AuthenticationInput, AuthenticationButton, StyledLink,
} from '../../AuthenticationConatiners/styles';

function ForgetUsernameFirstParty() {
  const RecoverUsername = () => {
    // Check nonempty inputfileds
    console.log('RecoverUsername');
    /* BackAPI */
    // 1.Validate Email format and username
    // 2.Button becomes trick
    // 3.message appears
  };
  return (
    <FirstPartyContainer mnwidth="260px" mxwidth="440px" onSubmit={RecoverUsername}>
      <AuthenticationInput label="Email Address" variant="outlined" />

      <AuthenticationButton type="submit" width="155px">Email Me</AuthenticationButton>
      <Typography paragraph fontSize="12px" fontFamily="ibm-plex-sans,sans-serif">
        Don
        {'\''}
        t have an email or need assistance logging in? GET HELP
      </Typography>

      <Typography paragraph fontSize={12} color="#3394DC" marginTop="10px">
        <StyledLink href="/login" capital="uppercase">log in</StyledLink>
        {' • '}
        {/* <Link href="/register" fontWeight={600} underline="none">SIGN UP</Link> */}
        <StyledLink href="/register" capital="uppercase">sign up</StyledLink>
      </Typography>
    </FirstPartyContainer>
  );
}

export default ForgetUsernameFirstParty;
