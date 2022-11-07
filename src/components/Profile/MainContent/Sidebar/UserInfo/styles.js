import {
  Box, Button, Card, styled, Typography,
} from '@mui/material';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

export const UserInfoBox = styled(Card)(() => ({
  // height: 445,
  backgroundColor: 'white',
  border: '1px solid #ccc',
  boxShadow: 'none',
}));

export const AddPhoto = styled(Box)(() => ({
  backgroundColor: 'white',
  borderRadius: '50%',
  width: 36,
  height: 36,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '&:hover': {
    cursor: 'pointer',
  },
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
  marginTop: -130,
}));

export const EngineIcon = styled(SettingsOutlinedIcon)(() => ({
  position: 'absolute',
  right: 10,
  top: 100,
  '&:hover': {
    cursor: 'pointer',
  },
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
export const FollowersArrow = styled(ArrowForwardIosOutlinedIcon)(() => ({
  marginLeft: '10px',
  '&:hover': {
    cursor: 'pointer',
  },
}));
export const AddSocialLink = styled(Button)(() => ({
  borderRadius: 999,
  fontSize: 12,
  fontWeight: 700,
  boxShadow: 'none',
  marginTop: 5,
  height: 40,
  textTransform: 'none',
  backgroundColor: '#edeff1',
  color: 'black',
  '&:hover': {
    border: 'none',
    boxShadow: 'none',
    backgroundColor: '#edeff1',
    color: 'black',
  },
}));
export const AddPost = styled(Button)(() => ({
  borderRadius: 999,
  fontSize: 14,
  fontWeight: 700,
  boxShadow: 'none',
  width: '100%',
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
  width: 'fit-content',
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
