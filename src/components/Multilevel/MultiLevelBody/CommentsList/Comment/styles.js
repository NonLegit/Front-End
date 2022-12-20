// MUI Components
import {
  Avatar, Box, Typography, Divider,
} from '@mui/material';
import { styled } from '@mui/material/styles';

// styles
import theme from '../../../../../styles/theme/index';

// CommentContainer
export const CommentContainer = styled(Box)(({ theme }) => ({
  // width: '50px',
  // border: '10px solid red',
  // padding: '5px',
  margin: '5px 0px 5px -12px !important',

  display: 'flex',
  flexDirection: 'row',

  // border: '2px solid black',

  '&': {
    [theme.breakpoints.down('785')]: {
      margin: '5px 0px 5px 0px !important',
    },
  },
}));

// CommentLeftSideBar
// eslint-disable-next-line no-unused-vars
export const CommentLeftSideBar = styled(Box)(({ theme }) => ({
  '&': {
    [theme.breakpoints.down('785')]: {
      display: 'none',
    },
  },

  // height: '100%',
  // width: '10px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  // flexWrap: 'nowrap',

  // border: '1px solid green',
}));

// Image Avatar for comment
export const ImgAvatar = styled(Avatar)(() => ({
  width: '30px',
  height: '30px',

}));

// Small Image Avatar for comment @ small screen
export const ImgAvatarSmall = styled(Avatar)(({ theme }) => ({
  width: '30px',
  height: '30px',
  display: 'none',

  '&': {
    [theme.breakpoints.down('785')]: {
      display: 'center',
    },
  },
}));

// Vertical Align of comment
export const CommentAlign = styled(Divider)(() => ({
  '&.MuiDivider-vertical': {
    width: '2px',
    flex: 1, // Extend on the main axis of the flex box
    margin: '5px auto',
    border: 'none',
    color: theme.palette.offwhite.main,
    backgroundColor: theme.palette.offwhite.main,
  },
  '&:hover': {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.primary.main,
  },
}
));

// CommentBody
export const CommentBody = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  margin: '1px 2px',
  // alignItems: 'center',
  // justifyContent: 'center',
  //   flexWrap: 'nowrap',
  // backgroundColor: 'green',
  // padding: '5px 2px',

  // Children Margin
  '& > * ': {
    margin: '2px 0px',
  },

  // border: '2px solid blue',
}));

// CommentHeader
export const CommentHeader = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  // justifyContent: 'center',
  //   flexWrap: 'nowrap',
  // backgroundColor: 'green',
  // padding: '5px 2px',

  // Children Margin
  '& > * ': {
    margin: '0px 3px',
  },

  // border: '2px solid red',
}));

// Link to Author of the Comment
export const AuthorLink = styled('a')(() => ({
  color: theme.palette.primary.main,
  textDecoration: 'none',
  fontSize: '12px',
  fontWeight: '500',

  '&:hover': {
    textDecoration: 'underline',
  },
}));

// Link to Author of the Comment
export const Duration = styled(Typography)(() => ({
  color: theme.palette.third.main,
  fontSize: '14px',
  fontWeight: '500',
}));

// Link to Author of the Comment
export const CommentText = styled(Typography)(() => ({
  fontSize: '12px',
}));
