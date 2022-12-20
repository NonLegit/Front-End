import { styled } from '@mui/system';

import theme from '../../styles/theme/index';

// Link to Home Page
export const HomePageLink = styled('a')(() => ({
  color: theme.palette.primary.main,
  textDecoration: 'none',
  //   fontSize: '12px',
  //   fontWeight: '500',

  '&:hover': {
    textDecoration: 'underline',
  },
}));
