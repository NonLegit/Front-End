import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import ForwardOutlinedIcon from '@mui/icons-material/ForwardOutlined';
import ForwardIcon from '@mui/icons-material/Forward';

export const SidebarQueueBox = styled(Box)(({ theme, condition }) => ({
  height: '100%',
  width: 40,
  backgroundColor: '#f8f9fa',
  paddingTop: 5,
  display: 'flex',
  position: 'absolute',
  flexDirection: 'column',
  alignItems: 'center',
  [theme.breakpoints.between('0', '650')]: {
    display: 'none',
  },
  ...((condition === 'true') && {
    borderLeft: `3px solid ${theme.palette.secondary.main}`,
  }),
}));

export const UpArrow = styled(ForwardOutlinedIcon)(({ theme }) => ({
  width: 30,
  height: 30,
  color: '#878a8c',
  borderRadius: 3,
  transform: 'rotate(-90deg)',
  '&:hover': {
    color: theme.palette.secondary.main,
    backgroundColor: '#d7d7d7',
  },
}));

export const UpArrowFilled = styled(ForwardIcon)(({ theme }) => ({
  width: 30,
  height: 30,
  color: theme.palette.secondary.main,
  borderRadius: 3,
  transform: 'rotate(-90deg)',
  '&:hover': {
    backgroundColor: '#d7d7d7',
  },
}));

export const DownArrow = styled(ForwardOutlinedIcon)(({ theme }) => ({
  width: 30,
  height: 30,
  color: '#878a8c',
  borderRadius: 3,
  transform: 'rotate(90deg)',
  '&:hover': {
    color: theme.palette.primary.main,
    backgroundColor: '#d7d7d7',
  },
}));

export const DownArrowFilled = styled(ForwardIcon)(({ theme }) => ({
  width: 30,
  height: 30,
  color: theme.palette.primary.main,
  borderRadius: 3,
  transform: 'rotate(90deg)',
  '&:hover': {
    backgroundColor: '#d7d7d7',
  },

}));

export const Number = styled(Typography)(({ theme, upvoted, downvoted }) => ({
  fontWeight: 700,
  ...((upvoted === 'true') && {
    color: theme.palette.secondary.main,
  }),
  ...((downvoted === 'true') && {
    color: theme.palette.primary.main,
  }),
}));
