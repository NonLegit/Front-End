import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { BackHomeButton, ImageWarning, NotFoundBox } from './styles';

function Nsfw({ handleWarning }) {
  const redirect = () => {
    window.location.pathname = '/';
  };
  return (
    <NotFoundBox>
      <ImageWarning src="https://www.redditstatic.com/desktop2x/img/content-gate-icons/nsfw.png" />
      <Typography sx={{ fontWeight: 700, marginBottom: 2, fontSize: '18px' }}>You must be 18+ to view this community</Typography>
      <Typography sx={{ marginBottom: 4, fontSize: '14px' }}>
        You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?
      </Typography>
      <Box>
        <BackHomeButton variant="contained" onClick={redirect}>No</BackHomeButton>
        <BackHomeButton variant="outlined" onClick={handleWarning} sx={{ textTransform: 'unset' }}>Yes</BackHomeButton>
      </Box>
    </NotFoundBox>
  );
}

export default Nsfw;
