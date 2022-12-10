import { Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import StyledBox from './styles';

function MuteHeader(props) {
  const { handleClickCloseMute } = props;
  return (
    <StyledBox>
      <Typography>Mute user</Typography>
      <CloseIcon
        sx={{ cursor: 'pointer' }}
        onClick={handleClickCloseMute}
      />
    </StyledBox>
  );
}

export default MuteHeader;
