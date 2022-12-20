import { Typography } from '@mui/material';

import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import { useParams } from 'react-router-dom';
import { EmptyBox } from '../../styles';

function EmptyApproved() {
  const { subReddit } = useParams();
  return (
    <EmptyBox>
      <CreateOutlinedIcon sx={{ color: '#7c7c7c' }} fonstSize="large" />
      <Typography variant="h6" color="#7c7c7c">
        No approved users in r/
        {' '}
        {subReddit}
      </Typography>
    </EmptyBox>
  );
}
export default EmptyApproved;
