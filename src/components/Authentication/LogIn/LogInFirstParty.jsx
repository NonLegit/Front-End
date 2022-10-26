import { Typography } from '@mui/material';
import {
  FirstPartyContainer, AuthenticationInput, AuthenticationButton, StyledLink,
} from '../AuthenticationConatiners/styles';

function LogInFirstParty() {
  const LogIn = () => {
    // Check nonempty inputfileds
    console.log('login');
    /* BackAPI */
    // 1. Valid input username must be from 3-20 characters
    // 2.Note on login a message appears at the bottom till loading
  };
  return (
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

      <Typography paragraph fontSize={12}>
        New to Reddit?
        {' '}
        <StyledLink href="/register" fontWeight="600" capital="uppercase">sign up</StyledLink>
      </Typography>
    </FirstPartyContainer>
  );
}

export default LogInFirstParty;
