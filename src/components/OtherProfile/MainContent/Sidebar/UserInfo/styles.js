import {
  Box, Button, Card, styled, Typography,
} from '@mui/material';

export const UserInfoBox = styled(Card)(() => ({
  // height: 445,
  backgroundColor: 'white',
  border: '1px solid #ccc',
  boxShadow: 'none',
}));

export const ProfilePic = styled('img')(() => ({
  outline: '4px solid white',
  width: 80,
  borderRadius: '3px 3px 0px 0px ',
  marginTop: 20,

}));

export const WideButton = styled(Button)(() => ({
  background: 'linear-gradient(90deg,#ec0623,#ff8717)',
  borderRadius: 999,
  fontSize: 14,
  fontWeight: 700,
  boxShadow: 'none',
  width: '100%',
  marginTop: 5,
  height: 32,
  textTransform: 'none',
  '&:hover': {
    border: 'none',
    boxShadow: 'none',
    height: 32,
  },
}));

export const ProfileBox = styled(Box)(() => ({
  // transform: 'translate(0,-30%)',
  padding: 12,
  height: '100%',
  width: '100%',
  position: 'relative',
  marginTop: -95,
}));

export const UserName = styled(Typography)(() => ({
  marginLeft: '1px',
  fontWeight: 500,
}));

export const InfoBox = styled(Box)(() => ({
  marginTop: 10,
  display: 'flex',
  flexWrap: 'wrap',
}));

export const EntityBox = styled(Box)(() => ({
  marginBottom: 12,
  flex: '1 1 50%',
}));

export const UserInfoButton = styled(Button)(() => ({
  borderRadius: 999,
  fontSize: 14,
  fontWeight: 700,
  boxShadow: 'none',
  width: '45%',
  marginTop: 10,
  height: 32,
  textTransform: 'none',
  '&:hover': {
    border: 'none',
    boxShadow: 'none',
    height: 32,
  },
}));
export const MoreOptions = styled(Button)(() => ({
  borderRadius: 999,
  fontSize: 14,
  fontWeight: 700,
  boxShadow: 'none',
  width: 120,
  marginLeft: '60%',
  marginTop: 10,
  height: 32,
  textTransform: 'none',
  '&:hover': {
    border: 'none',
    boxShadow: 'none',
    height: 32,
    backgroundColor: '#ededed',
  },
}));

export const OptionsButtons = styled(Button)(({ theme }) => ({
  fontSize: 12,
  fontWeight: 700,
  borderRadius: 999,
  marginTop: 8,
  color: theme.palette.primary.main,
  display: 'block',
  textTransform: 'unset',
  '&:hover': {
    backgroundColor: '#ededed',
  },
}));
