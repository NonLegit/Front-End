import * as React from 'react';
import { TextField } from '@mui/material';
import { StyledBox, StyledFont } from './styles';

/**
 * BanNote
 * @component
 * @property  {string} note a note from the moderator about the banned user
 * @return {React.Component} - Bannote (text field)
 */

function BanNote(props) {
  const { note } = props;
  const CHARACTER_LIMIT = 300;
  const [values, setValues] = React.useState({
    name: note,
  });
  const handleChangeCharNum = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };
  return (
    <StyledBox>
      <StyledFont>MOD NOTE</StyledFont>
      <TextField
        id="banNote"
        placeholder="Mod Note"
        size="small"
        fullWidth
        inputProps={{
          maxLength: CHARACTER_LIMIT,
        }}
        value={values.name}
        helperText={`${CHARACTER_LIMIT - values.name.length} Characters remaining`}
        onChange={handleChangeCharNum('name')}
      />
    </StyledBox>
  );
}

export default BanNote;
