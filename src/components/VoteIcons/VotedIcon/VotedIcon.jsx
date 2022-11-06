import ForwardIcon from '@mui/icons-material/Forward';

function VotedIcon({ direction, color }) {
  return (
    <ForwardIcon
      sx={{
        transform: `rotate(${direction === 'up' ? '-90deg' : '90deg'})`,
        width: 25,
        height: 25,
        color,
      }}
    />
  );
}

export default VotedIcon;
