import { TextField } from '@mui/material';
import { StyledBox } from './styles';

function Username() {
  return (
    <StyledBox>
      <TextField
        placeholder="Enter username"
        size="small"
        fullWidth
      />
    </StyledBox>
  );
}

export default Username;
