import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const DividerContainer = styled(Box)(() => ({
  width: '280px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-around',
}));

export const Hr = styled('hr')(() => ({
  width: '40%',
  height: '0.5px',
  margin: '5px',
  border: 'none',
  color: '#edeff1',
  backgroundColor: '#edeff1',
}));

export const DividerTxt = styled(Typography)(() => ({
  color: '#878a8c',
  textTransform: 'uppercase',
  fontFamily: 'ibm-plex-sans,sans-serif',
  fontSize: '14px',
  fontWeight: '500',
  lineHeight: '18px',
}));
