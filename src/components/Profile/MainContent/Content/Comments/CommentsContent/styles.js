import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CommentsBoxContent = styled(Box)(() => ({
  width: '100%',
  height: 96,
  display: 'flex',
  alignItems: 'center',
  paddingLeft: 20,
  justifyContent: 'center',
  '&:hover': {
    border: '1px solid #898989',
  },
}));

export const CommentsBoxBlue = styled(Box)(({ theme }) => ({
  width: 595,
  height: 77,
  backgroundColor: '#0079d30d',
  padding: '4px 4px',
  [theme.breakpoints.between('0', '950')]: {
    width: '100%',
  },
}));

export const CommentsButton = styled(Button)(({ theme }) => ({
  color: theme.palette.grey.A400,
  fontSize: 12,
  fontWeight: 700,
  padding: 0,
}));
