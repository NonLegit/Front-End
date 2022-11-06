import ForwardOutlinedIcon from '@mui/icons-material/ForwardOutlined';

function VoteIcon({ direction, color }) {
  return (
    <ForwardOutlinedIcon
      sx={{
        transform: `rotate(${direction === 'up' ? '-90deg' : '90deg'})`,
        width: 25,
        height: 25,
        '&:hover': {
          color,
        },
      }}
    />
  );
}

export default VoteIcon;
