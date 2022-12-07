import * as React from 'react';
import { TextField } from '@mui/material';
import { StyledBox, StyledFont } from './styles';

function BanNote() {
  const CHARACTER_LIMIT = 300;
  const [values, setValues] = React.useState({
    name: '',
  });
  const handleChangeCharNum = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };
  return (
    <StyledBox>
      <StyledFont>MOD NOTE</StyledFont>
      <TextField
        placeholder="Mod note"
        size="small"
        fullWidth
        inputProps={{
          maxlength: CHARACTER_LIMIT,
        }}
        value={values.name}
        helperText={`${CHARACTER_LIMIT - values.name.length} Characters remaining`}
        onChange={handleChangeCharNum('name')}
      />
    </StyledBox>
  );
}

export default BanNote;
