import {
  Box, Typography, TextareaAutosize, styled,
} from '@mui/material';

export const StyledBox = styled(Box)(() => ({
  padding: '16px',
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  flexDirection: 'column',
}));

export const StyledFont = styled(Typography)(() => ({
  color: '#878A8C',
  fontSize: '10px',
  marginBottom: '8px',
}));

export const StyledTextareaAutosize = styled(TextareaAutosize)(() => ({
  maxWidth: '100%',
  minHeight: '78px',
  border: '0px',
}));
