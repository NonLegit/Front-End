import { Box } from '@mui/material';
import { ImArrowUp } from 'react-icons/im';

function VotedIcon({ direction, color }) {
  return (
    <Box width={23} height={23}>
      <ImArrowUp
        style={{
          transform: `rotate(${direction === 'up' ? '0deg' : '180deg'})`,
          width: 19,
          height: 19,
          color,
        }}
      />
    </Box>
  );
}

export default VotedIcon;
