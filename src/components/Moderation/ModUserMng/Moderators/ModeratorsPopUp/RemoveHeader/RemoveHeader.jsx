import { Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import StyledBox from './styles';

function RemoveHeader(props) {
  const { handleClickCloseRemove } = props;
  return (
    <StyledBox>
      <Typography>Leave as mod</Typography>
      <CloseIcon
        sx={{ cursor: 'pointer' }}
        onClick={handleClickCloseRemove}
      />
    </StyledBox>
  );
}

export default RemoveHeader;
