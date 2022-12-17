import { Typography } from '@mui/material';

import VolumeOffOutlinedIcon from '@mui/icons-material/VolumeOffOutlined';
import { EmptyBox } from './styles';

function EmptyMuted() {
  return (
    <EmptyBox>
      <VolumeOffOutlinedIcon sx={{ color: '#7c7c7c' }} fonstSize="large" />
      <Typography variant="h6" sx={{ color: '#7c7c7c' }}>No muted users in r/softlol</Typography>
    </EmptyBox>
  );
}
export default EmptyMuted;
