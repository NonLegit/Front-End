import * as React from 'react';
import { StyledBox, StyledTextareaAutosize } from './styles';

function MuteMessage() {
  const CHARACTER_LIMIT = 300;
  const [values, setValues] = React.useState({
    name: '',
  });
  const handleChangeCharNum = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };
  return (
    <StyledBox>
      <StyledTextareaAutosize
        placeholder="Reason they were muted"
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

export default MuteMessage;
