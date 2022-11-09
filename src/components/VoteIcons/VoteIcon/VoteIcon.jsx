import { useTheme } from '@mui/system';
import { TbArrowBigTop } from 'react-icons/tb';

function VoteIcon({ direction, color }) {
  const theme = useTheme();
  return (
    <TbArrowBigTop
      style={{
        transform: `rotate(${direction === 'up' ? '0deg' : '180deg'})`,
        width: 23,
        height: 23,
        '&:hover': {
          color,
        },
        color: theme.palette.third.main,
      }}
    />
  );
}

export default VoteIcon;
