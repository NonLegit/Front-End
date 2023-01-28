import { Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import VolumeOffOutlinedIcon from '@mui/icons-material/VolumeOffOutlined';
import { EmptyBox } from '../../styles';

/**
 * empty muted page
 * @component
 * @return {React.Component} - empty muted page component
 */

function EmptyMuted() {
  const { subReddit } = useParams();
  return (
    <EmptyBox>
      <VolumeOffOutlinedIcon sx={{ color: '#7c7c7c' }} fontSize="large" />
      <Typography variant="h6" color="#7c7c7c">
        No muted users in r/
        {subReddit}
      </Typography>
    </EmptyBox>
  );
}
export default EmptyMuted;
