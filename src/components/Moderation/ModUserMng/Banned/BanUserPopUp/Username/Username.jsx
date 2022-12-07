import { TextField } from '@mui/material';
import { StyledBox, StyledFont } from './styles';

function Username() {
  return (
    <StyledBox>
      <StyledFont>ENTER USERNAME</StyledFont>
      <TextField
        placeholder="u/username"
        size="small"
        fullWidth
      />
    </StyledBox>
  );
}

export default Username;
