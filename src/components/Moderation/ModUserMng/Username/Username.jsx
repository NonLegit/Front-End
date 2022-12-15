import { TextField } from '@mui/material';
import { StyledBox } from './styles';

function Username(props) {
  const { placeholder } = props;
  return (
    <StyledBox>
      <TextField
        placeholder={placeholder}
        size="small"
        fullWidth
      />
    </StyledBox>
  );
}

export default Username;
