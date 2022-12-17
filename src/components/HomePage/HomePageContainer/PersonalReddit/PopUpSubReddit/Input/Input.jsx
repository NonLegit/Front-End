import {
  FilledInput, FormControl, InputAdornment, InputLabel,
} from '@mui/material';
import { Count } from './style';
/**
 * @component
 * @param {object} props
 * @return {React.Component} -input for pop up form
 */
function Input(props) {
  const {
    subRedditName, handleChange, check, count, checked, errorMassage,
  } = props;
  return (
    <>
      <FormControl fullWidth sx={{ height: 28 }}>
        <InputLabel htmlFor="name" />
        <FilledInput
          sx={{
            '&: after': { borderBottom: '2px solid #040404de', padding: 0 },
            height: 28,
            '& .css-1vbc0rj-MuiInputBase-input-MuiFilledInput-input': { padding: 0 },
          }}
          onInput={(e) => {
          // eslint-disable-next-line radix
            e.target.value = e.target.value.slice(0, 21);
          }}
          id="name"
          data-testid="input"
          value={subRedditName}
          onChange={handleChange}
          startAdornment={<InputAdornment position="start">r/</InputAdornment>}
          maxLength={21}
          onBlur={check}
        />
      </FormControl>
      <Count
        condition={(count === 0).toString()}
      >
        {count}
        {' '}
        Characters remaining
      </Count>
      <Count data-testid="warning" condition="true">{checked}</Count>
      <Count condition="true">{errorMassage}</Count>
    </>
  );
}
export default Input;
