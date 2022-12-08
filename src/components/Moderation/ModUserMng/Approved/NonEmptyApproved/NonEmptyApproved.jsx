import { Box } from '@mui/material';
import SearchBar from './SearchBar/SearchBar';
import ApprovedUser from './ApprovedUser/ApprovedUser';

function NonEmptyApproved() {
  return (
    <Box sx={{ margin: '0px 24px' }}>
      <SearchBar />
      <ApprovedUser />
    </Box>
  );
}

export default NonEmptyApproved;
