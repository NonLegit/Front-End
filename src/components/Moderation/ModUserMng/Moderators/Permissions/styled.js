import {
  FormHelperText, Box, FormControlLabel, styled,
} from '@mui/material';

export const StyledFormControlLabel = styled(FormControlLabel)(() => ({
  padding: '0px 0px 0px 16px',
  margin: '0px 0px 0px 0px',
  '& .MuiTypography-root': { fontSize: '12px', fontWeight: '700' },
  '& .MuiButtonBase-root': { padding: '0px 8px 0px 0px' },
  marginTop: '16px',
}));

export const StyledFormHelperText = styled(FormHelperText)(() => ({
  paddingLeft: '45px',
}));

export const StyledPermissionContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  ml: 3,
}));
