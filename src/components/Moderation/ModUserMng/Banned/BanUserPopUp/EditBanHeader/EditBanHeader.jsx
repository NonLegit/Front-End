import { Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import StyledBox from './styles';

function EditBanHaeder(props) {
  const { handleClickCloseBan, userName } = props;
  return (
    <StyledBox>
      <Typography>
        Edit ban for: u/
        {userName}
      </Typography>
      <CloseIcon
        sx={{ cursor: 'pointer' }}
        onClick={handleClickCloseBan}
      />
    </StyledBox>
  );
}

export default EditBanHaeder;
