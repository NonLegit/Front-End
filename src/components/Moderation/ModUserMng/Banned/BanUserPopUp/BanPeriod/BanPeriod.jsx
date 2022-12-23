import * as React from 'react';
import {
  FormControl, FormControlLabel, TextField, Checkbox, Box,
} from '@mui/material';
import { StyledBox, StyledFont } from './styles';

/**
 * Ban period
 * @component
 * @property  {string} duration the period of banning the user its range is from 1 to 999 or parmenant
 * @return {React.Component} - Ban period component
 */

function BanPeriod(props) {
  const { duration } = props;
  const [checked, setChecked] = React.useState(duration === -1);
  const [banPeriod, setbanPeriod] = React.useState((duration === -1) ? 1 : duration);

  return (
    <>
      <StyledFont>HOW LONG?</StyledFont>
      <StyledBox>
        <Box>
          <TextField
            id="duration"
            type="number"
            inputProps={{ min: 1, max: 999 }}
            disabled={checked}
            value={(checked) ? '' : banPeriod}
            size="small"
            sx={{ width: '75px' }}
            focused
            onChange={(event) => setbanPeriod(event.target.value)}
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
                checked={checked}
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
