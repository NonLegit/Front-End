import { IconButton } from '@mui/material';
import { styled } from '@mui/system';

export const CustomIconButton = styled(IconButton)(({ theme }) => ({
  borderRadius: 8,
  padding: 5,
  [theme.breakpoints.down('xs')]: {
    display: 'none',
  },
  alignSelf: 'flex-end',
  margin: 4,
}));
