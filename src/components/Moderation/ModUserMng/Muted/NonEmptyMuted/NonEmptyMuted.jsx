import { Box } from '@mui/material';
import SearchBar from './SearchBar/SearchBar';
import MutedUser from './MutedUser/MutedUser';

function NonEmptyBanned() {
  return (
    <Box sx={{ margin: '0px 24px' }}>
      <SearchBar />
      <MutedUser />
    </Box>
  );
}

export default NonEmptyBanned;
