import { AppBar, styled } from '@mui/material';

const StyledNavbar = styled(AppBar)(() => ({
  backgroundColor: 'white',
  borderColor: 'white',
  borderStyle: 'solid',
  borderWidth: 1,
  position: 'sticky',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid #edeff1',
  padding: '0px 20px',
  boxShadow: 'none',
  height: '48px',
  '& .MuiToolbar-root': {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    position: 'relative',
    height: '48px',
    '@media (min-width: 600px)': {
      minHeight: '48px',
    },
  },
}));

export default StyledNavbar;
