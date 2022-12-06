import { Typography } from '@mui/material';
import { NotFoundBox, Image, BackHomeButton } from './styles';

function ProfileNotFound() {
  const redirect = () => {
    window.location.pathname = '/';
  };
  return (
    <NotFoundBox>
      <Image src="https://www.redditstatic.com/desktop2x/img/snoomoji/snoo_thoughtful.png" />
      <Typography sx={{ fontWeight: 700, marginBottom: 2 }}>Sorry, nobody on Reddit goes by that name.</Typography>
      <Typography variant="body2" sx={{ marginBottom: 5 }}>The person may have been banned or the username is incorrect.</Typography>
      <BackHomeButton variant="contained" onClick={redirect}>Go Home</BackHomeButton>
    </NotFoundBox>
  );
}

export default ProfileNotFound;
