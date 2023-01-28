import { Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import NotInterestedIcon from '@mui/icons-material/NotInterested';
import { EmptyBox } from '../../styles';

/**
 * empty ban page
 * @component
 * @return {React.Component} - empty ban page component
 */

function EmptyBanned() {
  const { subReddit } = useParams();
  return (
    <EmptyBox>
      <NotInterestedIcon sx={{ color: '#7c7c7c' }} fontSize="large" />
      <Typography variant="h6" color="#7c7c7c">
        No banned users in r/
        {subReddit}
      </Typography>
    </EmptyBox>
  );
}
export default EmptyBanned;
