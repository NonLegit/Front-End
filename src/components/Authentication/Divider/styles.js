import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const DividerContainer = styled(Box)(() => ({
  width: '280px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  margin: '15px 0px',
}));

export const Hr = styled('hr')(() => ({
  width: '40%',
  height: '1px',
  border: 'none',
  color: '#edeff1',
  backgroundColor: '#edeff1',
}));

export const DividerTxt = styled(Typography)(() => ({
  fontSize: '14px',
  fontWeight: '400',
  color: '#878a8c',
}));
