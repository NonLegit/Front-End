import { Typography } from '@mui/material';

import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import { useParams } from 'react-router-dom';
import { EmptyBox } from '../../styles';

/**
 * @component empty approve page
 * @return {React.Component} - empty approved page
 */

function EmptyApproved() {
  const { subReddit } = useParams();
  return (
    <EmptyBox>
      <CreateOutlinedIcon sx={{ color: '#7c7c7c' }} fontSize="large" />
      <Typography variant="h6" color="#7c7c7c">
        No approved users in r/
        {' '}
        {subReddit}
      </Typography>
    </EmptyBox>
  );
}
export default EmptyApproved;
