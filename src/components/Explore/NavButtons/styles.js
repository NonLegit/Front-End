import { Tabs, styled } from '@mui/material';

export const StyledTabs = styled(Tabs)(() => ({
  '& .MuiTab-root': {
    fontSize: '12px',
    fontWeight: 'bold',
    textTransform: 'Capitalize',
    '&:hover': {
      color: 'black',
    },
  },
  '& .MuiTabs-scroller.MuiTabs-indicator': {
    color: 'black',
    width: '50px !important',
    height: '2px',
  },
  '& .MuiTab-root.Mui-selected': {
    color: 'black !important',
  },
}));
