import { styled } from '@mui/material';
import TabList from '@mui/lab/TabList';

export const StyledTabs = styled(TabList)(() => ({
  '& .MuiTab-root': {
    fontSize: '12px',
    fontWeight: 'bold',
    textTransform: 'Capitalize',
    '&:hover': {
      color: 'black',
    },
  },
  '& .MuiTab-root.Mui-selected': {
    color: 'black !important',
  },
  '& .MuiTabs-scroller.MuiTabs-indicator': {
    color: 'black',
    width: '50px !important',
    height: '2px',
  },
}));
