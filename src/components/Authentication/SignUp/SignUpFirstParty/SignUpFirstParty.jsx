import { Typography, Link } from '@mui/material';
import { FirstPartyContainer, AuthenticationInput, AuthenticationButton } from '../../AuthenticationConatiners/styles';

function SignUpFirstParty() {
  const SignUp = () => {
    console.log('signup');
    /* BackAPI */
  };
  return (
    <FirstPartyContainer width="280px" onSubmit={SignUp}>
      <AuthenticationInput label="Email" variant="outlined" />
      <AuthenticationButton type="submit">Continue</AuthenticationButton>
      <Typography paragraph fontSize={12}>
        Already a redditor?
        {' '}
        <Link href="/login" fontWeight={600} underline="none">LOG IN</Link>
      </Typography>
    </FirstPartyContainer>
  );
}

export default SignUpFirstParty;
