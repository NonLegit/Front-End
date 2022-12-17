import { Box, styled } from '@mui/material';

const StyledBottom = styled(Box)(() => ({
  '& .MuiTypography-root': {
    fontSize: '14px',
    padding: '4px 24px 22px 0px',
  },
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  top: '450px',
  width: '270px',
  height: '235px',
  alignItems: 'center',
}));

export default StyledBottom;
