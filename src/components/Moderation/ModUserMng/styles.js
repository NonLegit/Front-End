import {
  Button, Box, Dialog, styled, Avatar,
} from '@mui/material';

export const UserMngButton = styled(Button)(() => ({
  fontSize: '14px',
  fontWeight: 'bold',
  textTransform: 'Capitalize',
  borderRadius: 20,
  backgroundColor: 'transparent',
  height: 'fitContent',
  '& .MuiTypography-root': { flexWrap: 'nowrap' },
  '&:hover': {
    backgroundColor: '#ededed',
  },
}));

export const UsermngButtonContainer = styled(Box)(() => ({
  display: 'flex',
  padding: '0px 16px',
  minWidth: 'fit-content',
}));

export const UserBar = styled(Box)(({ theme }) => ({
  display: 'flex',
  [theme.breakpoints.between('0', '700')]: {
    flexDirection: 'column',
  },
  alignItems: 'center',
  backgroundColor: '#ffffff',
  borderRadius: '0 0 4px 4px',
  margin: '0px 24px',
  heigth: 'fit-content',
}));

export const UserContainer = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  padding: '8px 16px',
  minWidth: '220px',
}));

export const TextContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  [theme.breakpoints.between('0', '700')]: {
    justifyContent: 'center',
  },
}));

export const QueueBox = styled(Box)(() => ({
  width: 'auto',
  margin: '0 24px 0 24px',
  paddingTop: 24,

}));

export const QueueText = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: 20,
}));

export const ControlBar = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  backgroundColor: '#edeff1',
  height: '48px',
  padding: '0 24px',
}));

export const ModeratorsTypeContainer = styled(Box)(() => ({
  margin: '0px  0px 36px 0px',
}));

export const StyledDialog = styled(Dialog)(({ fullscreen, width, height }) => ({
  '& .MuiDialog-paper': {
    width,
    height,
    borderRadius: '5px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'space-between',
    fullscreen,
  },
}));

export const EmptyBox = styled(Box)(() => ({
  height: 260,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'white',
  marginTop: 10,
  padding: 85,
  flexDirection: 'column',
}));

export const FooterContainer = styled(Box)(() => ({
  display: 'flex',
  backgroundColor: '#edeff1 ',
  height: '100%',
}));

export const StyledDetails = styled(Box)(() => ({
  backgroundColor: '#edeff1',
  marginLeft: '24px',
  marginRight: '24px',
  flexDirection: 'column',
}));

export const StyledAvatar = styled(Avatar)(() => ({
  width: '32px',
  height: '32px',
}));
