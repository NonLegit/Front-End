// MUI Components
import { Box, Typography } from '@mui/material';
import { HomePageLink } from './styles';

function ErrorPageComponent() {
  return (
    <Box display="flex" flexDirection="column" justifyContent="space-around" alignItems="center" width="100%" height="50vh">
      <img src="https://www.redditstatic.com/reddit404b.png" alt="Page Not Found" width="300px" />
      <Typography fontSize="18px" margin="10px 0px">404 page not found</Typography>
      <Typography>the page you requested does not exist</Typography>
      <Typography>
        Redirect to
        {' '}
        <HomePageLink href="/">Home</HomePageLink>
        {' '}
        🏠
      </Typography>
    </Box>
  );
}

export default ErrorPageComponent;
