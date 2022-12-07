import { Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import StyledBox from './styles';

function Header(props) {
  const { handleClickCloseBan } = props;
  return (
    <StyledBox>
      <Typography>Ban a user:</Typography>
      <CloseIcon
        sx={{ cursor: 'pointer' }}
        onClick={handleClickCloseBan}
      />
    </StyledBox>
  );
}

export default Header;
