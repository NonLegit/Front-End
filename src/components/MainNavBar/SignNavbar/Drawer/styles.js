import { Drawer, styled } from '@mui/material';

const StyledDrawer = styled(Drawer)(() => ({
  width: '270px',
  '& .MuiDrawer-paper': { height: '450px', width: '270px', boxSizing: 'border-box' },
  '& .MuiList-root': {
    '& .MuiListSubheader-root': {
      color: '#878A8C',
      padding: '16px 24px 8px',
      lineHeight: 'normal',
      fontSize: '10px',
    },
    '& .MuiButtonBase-root': {
      display: 'flex',
      '& .MuiListItemText-root .MuiTypography-root': { fontSize: '14px' },
      '& .MuiCollapse-root .MuiButtonBase-root': { color: 'white' },
    },
  },

}));

export default StyledDrawer;
