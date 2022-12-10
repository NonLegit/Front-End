import { TextField } from '@mui/material';
import { StyledBox } from './styles';

function Username() {
  return (
    <StyledBox>
      <TextField
        placeholder="Username to mute"
        size="small"
        fullWidth
      />
    </StyledBox>
  );
}

export default Username;
