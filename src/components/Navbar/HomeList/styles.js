import {
  List, styled, ListItemButton, alpha,
} from '@mui/material';
import MuiListItemText from '@mui/material/ListItemText';

export const StyledList = styled(List)(() => ({
  position: 'relative',
  backgroundColor: '#F6F7F8',
  border: '1px solid #edeff1',
  borderRadius: '1.25em',
  padding: '0px',
  margin: '0px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  boxSizing: 'border-box',
  '& .MuiButtonBase-root': {
    backgroundColor: 'white',
    width: '270px',
    '&:hover': {
      backgroundColor: 'transparent',
    },
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: '0px',
    paddingBottom: '0px',
  },
  '& .MuiList-root': {
    '& .MuiButtonBase-root': {
      padding: '8px 24px',
      '& .MuiTypography-root': {
        color: '#3a3643',
        fontWeight: '400',
      },
    },
  },
  '& .MuiListSubheader-root': {
    color: '#878a8c',
    fontSize: '10px',
    textTransform: 'uppercase',
    lineHeight: '16px',
    fontweigth: 500,
    padding: '16px 24px 8px 24px',
  },
  '& .MuiListItemIcon-root': {
    display: 'contents',
    '& .MuiSvgIcon-root': {
      fontSize: 22,
      marginRight: '10px',
      color: '#3a3643',
    },
    '& .MuiAvatar-root': {
      backgroundColor: '#D7DFE2',
      width: '20px',
      height: '20px',
      borderRadius: '0px',
      marginRight: '10px',
    },
  },
}));

export const StyledListItemButton = styled(ListItemButton)(() => ({
  '&:disabled': {
    backgroundColor: 'red',
    fontWeigth: 'bold',
  },
  display: 'flex',
  textTransform: 'capitalize',
  padding: '8px 24px',
  width: '100%',
  position: 'relative',
  '&:hover': {
    backgroundColor: alpha('#00000', 0.04),
  },
  alignItems: 'center',
  flexDirection: 'row',
}));

export const StyledListItemText = styled(MuiListItemText)(() => ({
  margin: '0px',
  '& .MuiListItemText-primary': {
    flexGrow: 1,
    fontSize: '14px',
    lineHeight: '18px',
    marginLeft: '8px',
    maxWidth: '208px',
    overFlow: 'hidden',
    textAlign: 'left',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    color: '#757575',
    textTransform: 'capitalize',
  },
}));
