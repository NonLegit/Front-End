import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import ForwardOutlinedIcon from '@mui/icons-material/ForwardOutlined';

export const SidebarQueue = styled(Box)(({ theme, condition }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  ...((condition === 'true') && {
    borderLeft: `4px solid ${theme.palette.secondary.main};`,
  }),
}));

export const Arrow = styled(ForwardOutlinedIcon)(({ theme }) => ({
  width: 30,
  height: 30,
  color: '#878a8c',
  borderRadius: 3,
  '&:hover': {
    color: theme.palette.secondary.main,
    backgroundColor: '#d7d7d7',
  },
}));

export const SidebarQueueBox = styled(Box)(() => ({
  width: 40,
  backgroundColor: '#f8f9fa',
}));
