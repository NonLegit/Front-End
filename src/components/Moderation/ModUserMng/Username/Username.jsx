import { TextField } from '@mui/material';
import { StyledBox } from './styles';

/**
 * username input field for all user management serction popups
 * @component
 * @property {string} placeholder determine the string that appear in the user input field
 * @return {React.Component} - username input field component
 */

function Username(props) {
  const { placeholder } = props;
  return (
    <StyledBox>
      <TextField
        id="username"
        placeholder={placeholder}
        size="small"
        fullWidth
      />
    </StyledBox>
  );
}

export default Username;
