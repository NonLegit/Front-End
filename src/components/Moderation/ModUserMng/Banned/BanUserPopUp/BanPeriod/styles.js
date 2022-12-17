import { Box, styled, Typography } from '@mui/material';

export const StyledBox = styled(Box)(() => ({
  paddingLeft: '16px',
  paddingBottom: '16px',
  display: 'flex',
  '& .MuiBox-root': {
    paddingRight: '8px',
  },
  '& .MuiFormControlLabel-root': {
    '& .MuiTypography-root': {
      border: '0px',
      padding: '0px 0px 0px 0px',
    },
    '& .MuiButtonBase-root': {
      width: 'auto !important',
      border: '0px',
      '&:hover': {
        backgroundColor: 'transparent',
      },
      '&.Mui-checked': {
        color: '#24a0ed',
      },
    },
  },
}));

export const StyledFont = styled(Typography)(() => ({
  paddingLeft: '16px',
  color: '#878A8C',
  fontSize: '12px',
}));
