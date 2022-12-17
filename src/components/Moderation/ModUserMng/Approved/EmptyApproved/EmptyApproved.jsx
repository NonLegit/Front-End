import { Typography } from '@mui/material';

import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import { EmptyBox } from './styles';

function EmptyApproved() {
  return (
    <EmptyBox>
      <CreateOutlinedIcon sx={{ color: '#7c7c7c' }} fonstSize="large" />
      <Typography variant="h6" sx={{ color: '#7c7c7c' }}>No approved users in r/softlol</Typography>
    </EmptyBox>
  );
}
export default EmptyApproved;
