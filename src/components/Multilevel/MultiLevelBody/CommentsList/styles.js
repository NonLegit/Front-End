// MUI Components
import { Box, Link } from '@mui/material';
import { styled } from '@mui/material/styles';

// styles
import theme from '../../../../styles/theme/index';

// MultilevelPostCommentsConatiner
export const MultilevelPostCommentsConatiner = styled(Box)(() => ({
  width: '100%',
  minHeight: '340px',
  padding: '5px 0px 5px 25px',
  //   display: 'flex',
  //   flexDirection: 'row',
  //   flexWrap: 'nowrap',

  // backgroundColor: '#abcabc',
}));

// Expand Comments Link
export const MoreCommentsLink = styled(Link)(() => ({

  fontWeight: '700',
  textDecoration: 'none',
  fontSize: '12px',
  color: theme.palette.third.main,

  '&.MuiLink-root:hover': {
    textDecoration: 'underline',
    cursor: 'pointer',
  },

}));
