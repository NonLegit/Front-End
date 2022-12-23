import { Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import StyledBox from './styles';

/**
 * Header of popups for user management section
 * @component
 * @property {function} buttonFunction the button functionality
 * @property {string} headerText the label of the header
 * @return {React.Component} - Header component
 */

function Header(props) {
  const { buttonFunction, headerText } = props;
  return (
    <StyledBox>
      <Typography
        color="#1C1C1C"
        fontSize="16px"
        fontWeight={600}
      >
        {headerText}

      </Typography>
      <CloseIcon
        sx={{ cursor: 'pointer' }}
        onClick={buttonFunction}
      />
    </StyledBox>
  );
}

export default Header;
