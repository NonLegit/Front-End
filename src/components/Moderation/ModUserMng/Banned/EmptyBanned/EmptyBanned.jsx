import { Typography } from '@mui/material';

import NotInterestedIcon from '@mui/icons-material/NotInterested';
import { EmptyBox } from '../../styles';

function EmptyBanned() {
  return (
    <EmptyBox>
      <NotInterestedIcon sx={{ color: '#7c7c7c' }} fonstSize="large" />
      <Typography variant="h6" color="#7c7c7c">No banned users in r/softlol</Typography>
    </EmptyBox>
  );
}
export default EmptyBanned;
