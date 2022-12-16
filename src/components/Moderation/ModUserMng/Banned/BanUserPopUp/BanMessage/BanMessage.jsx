import * as React from 'react';
import { Typography } from '@mui/material';
import { StyledBox, StyledTextareaAutosize } from './styles';

function BanMessage() {
  const CHARACTER_LIMIT = 5000;
  const [values, setValues] = React.useState({
    name: '',
  });
  const handleChangeCharNum = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };
  return (
    <StyledBox>
      <Typography>Note to include in ban message •</Typography>
      <StyledTextareaAutosize
        placeholder="Reason they were banned"
        inputProps={{
          maxlength: CHARACTER_LIMIT,
        }}
        value={values.name}
        helperText={`${CHARACTER_LIMIT - values.name.length} Characters remaining`}
        onChange={handleChangeCharNum('name')}
        margin="normal"
      />
    </StyledBox>
  );
}

export default BanMessage;
