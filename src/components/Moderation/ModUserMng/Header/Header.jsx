import { Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import StyledBox from './styles';

function Header(props) {
  const { buttonFunction, headerText } = props;
  return (
    <StyledBox>
      <Typography>{headerText}</Typography>
      <CloseIcon
        sx={{ cursor: 'pointer' }}
        onClick={buttonFunction}
      />
    </StyledBox>
  );
}

export default Header;
