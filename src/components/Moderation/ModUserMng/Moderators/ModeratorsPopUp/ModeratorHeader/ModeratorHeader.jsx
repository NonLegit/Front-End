import { Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import StyledBox from './styles';

function ModeratorHeader(props) {
  const { handleClickCloseApproved } = props;
  return (
    <StyledBox>
      <Typography>Add approved user</Typography>
      <CloseIcon
        sx={{ cursor: 'pointer' }}
        onClick={handleClickCloseApproved}
      />
    </StyledBox>
  );
}

export default ModeratorHeader;
