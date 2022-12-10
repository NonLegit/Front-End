import { Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import StyledBox from './styles';

function UnmuteHeader(props) {
  const { handleClickCloseUnmute } = props;
  return (
    <StyledBox>
      <Typography>Confirm</Typography>
      <CloseIcon
        sx={{ cursor: 'pointer' }}
        onClick={handleClickCloseUnmute}
      />
    </StyledBox>
  );
}

export default UnmuteHeader;
