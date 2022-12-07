import { Box } from '@mui/material';
import SearchBar from './SearchBar/SearchBar';
import BannedUser from './BannedUser/BannedUser';

function NonEmptyBanned() {
  return (
    <Box sx={{ margin: '0px 24px' }}>
      <SearchBar />
      <BannedUser />
    </Box>
  );
}

export default NonEmptyBanned;
