import { List, styled } from '@mui/material';

const StyledList = styled(List)(() => ({
  position: 'relative',
  '& .MuiButtonBase-root': {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  '& .MuiCollapse-root': {
    '& .MuiList-root': {
      backgroundColor: 'white',
      position: 'absolute',
      '& .MuiButtonBase-root': {
        padding: '8px 25px',
        backgroundColor: 'white',
        width: '170px',
        left: '-90px',
        '&:hover': {
          backgroundColor: '#0079d3',
          '& .MuiTypography-root': {
            color: 'white',
            whiteSpace: 'nowrap',
          },
          '& .MuiListItemIcon-root': {
            display: 'contents',
          },
        },
        '& .MuiSvgIcon-root': {
          color: 'black',
          fontSize: 22,
          marginRight: '10px',
        },
        '& .MuiTypography-root': {
          color: 'black',
          whiteSpace: 'nowrap',
        },
        '& .MuiListItemIcon-root': {
          display: 'contents',
        },
      },
    },
  },
}));

export default StyledList;
