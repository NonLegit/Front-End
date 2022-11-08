import { Tabs, Tab } from '@mui/material';
import { styled } from '@mui/system';

export const CustomTabs = styled(Tabs)(() => ({
  minHeight: 0,
  '& .MuiTabs-indicator': {
    height: 2,
    transition: 'all 0s ease 0s',
    webkitTransition: 'all 0s ease 0s',
    bottom: 1,
  },
  '& .MuiTabs-flexContainer': {
    minWidth: 480,
  },
  '& .MuiTabs-scroller': {
    overflowX: 'scroll !important',
  },
}));

export const CustomTab = styled(Tab)(() => ({
  textTransform: 'capitalize',
  width: 'calc(100%/3.01)',
  padding: '15px 0',
  minHeight: 0,
  fontWeight: 'bolder',
  '&.Mui-selected': {
    backgroundColor: '#0079d30d',
  },
  whiteSpace: 'nowrap',
}));
