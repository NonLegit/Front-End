import { Box, styled } from '@mui/material';

const ContentBox = styled(Box)(({ theme }) => ({
  width: 640,
  height: 'fit-content',
  [theme.breakpoints.between('0', '970')]: {
    width: '100%',
  },
}));

export default ContentBox;
