// MUI Components
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

// MultilevelPostCommentsConatiner
export const NoCommentsConatiner = styled(Box)(() => ({
  width: '100%',
  minHeight: '340px',
  padding: '5px 10px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  '& p': {
    fontSize: '18px',
    fontWeight: '500',
    lineHeight: '22px',
    color: '#7c7c7c',

    margin: '5px',
  },

  '& > *': {
    opacity: '0.6',
  },

  // backgroundColor: '#abcabc',
}));
