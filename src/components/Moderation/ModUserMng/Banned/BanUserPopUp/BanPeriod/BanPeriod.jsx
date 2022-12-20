import * as React from 'react';
import {
  FormControl, FormControlLabel, TextField, Checkbox, Box,
} from '@mui/material';
import { StyledBox, StyledFont } from './styles';

function BanPeriod(props) {
  const { duration } = props;
  const [checked, setChecked] = React.useState(true);

  // const handleChange = (event) => {
  //   setChecked(event.target.checked);
  // };

  return (
    <>
      <StyledFont>HOW LONG?</StyledFont>
      <StyledBox>
        <Box>
          <TextField
            type="number"
            inputProps={{ min: 0, max: 999 }}
            disabled={checked}
            defaultValue={(duration === -1) ? '' : duration}
            size="small"
            sx={{ width: '75px' }}
            focused
          />
          <TextField
            defaultValue="Days"
            disabled
            size="small"
            sx={{ width: '75px' }}
          />
        </Box>
        <FormControl component="fieldset">
          <FormControlLabel
            control={(
              <Checkbox
                defaultChecked={checked || duration === -1}
                onClick={() => { setChecked(!checked); }}
                disableRipple
                disableFocusRipple
              />
)}
            label="Permanent"
            labelPlacement="end"
          />
        </FormControl>
      </StyledBox>
    </>
  );
}

export default BanPeriod;
