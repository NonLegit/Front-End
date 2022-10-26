import { Typography, Link } from '@mui/material';
import { FirstPartyContainer, AuthenticationInput, AuthenticationButton } from '../../AuthenticationConatiners/styles';

function ForgetUsernameFirstParty() {
  const RecoverPassword = () => {
    // Check nonempty inputfileds
    console.log('RecoverPassword');
    /* BackAPI */
  };
  return (
    <FirstPartyContainer mnwidth="260px" mxwidth="440px" onSubmit={RecoverPassword}>
      <AuthenticationInput label="Email Address" variant="outlined" />

      <AuthenticationButton type="submit" width="155px">Email Me</AuthenticationButton>
      <Typography paragraph fontSize="12px" fontFamily="ibm-plex-sans,sans-serif">
        Don
        {'\''}
        t have an email or need assistance logging in?
        <Link href="/https://reddithelp.com/hc/en-us/sections/360008917491-Account-Security" fontWeight={600} underline="none"> GET HELP</Link>
      </Typography>

      <Typography paragraph fontSize={12} color="#3394DC" marginTop="10px">
        <Link href="/login" fontWeight={600} underline="none">LOG IN</Link>
        {' • '}
        <Link href="/register" fontWeight={600} underline="none">SIGN UP</Link>
      </Typography>
    </FirstPartyContainer>
  );
}

export default ForgetUsernameFirstParty;
