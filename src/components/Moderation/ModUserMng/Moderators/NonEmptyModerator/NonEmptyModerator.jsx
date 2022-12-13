import { Box } from '@mui/material';
import SearchBar from './SearchBar/SearchBar';
import Moderator from './Moderator/Moderator';

function NonEmptyApproved() {
  return (
    <Box sx={{ margin: '0px 24px' }}>
      <SearchBar />
      <Moderator />
    </Box>
  );
}

export default NonEmptyApproved;
