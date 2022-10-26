import { Typography, Link } from '@mui/material';
import { FirstPartyContainer, AuthenticationInput, AuthenticationButton } from '../AuthenticationConatiners/styles';

function LogInFirstParty() {
  const LogIn = () => {
    // Check nonempty inputfileds
    console.log('login');
    /* BackAPI */
  };
  return (
    <FirstPartyContainer width="280px" onSubmit={LogIn}>
      <AuthenticationInput label="USERNAME" variant="outlined" />
      <AuthenticationInput label="PASSWORD" variant="outlined" />

      <AuthenticationButton type="submit">Log In</AuthenticationButton>
      <Typography paragraph fontSize="12px" fontFamily="ibm-plex-sans,sans-serif">
        Forgot your
        {' '}
        <Link href="/username" fontWeight={400} underline="none">username</Link>
        {' or '}
        <Link href="/password" fontWeight={400} underline="none">password</Link>
        {' ?'}
      </Typography>

      <Typography paragraph fontSize={12}>
        New to Reddit?
        {' '}
        <Link href="/register" fontWeight={600} underline="none">SIGN UP</Link>
      </Typography>
    </FirstPartyContainer>
  );
}

export default LogInFirstParty;
