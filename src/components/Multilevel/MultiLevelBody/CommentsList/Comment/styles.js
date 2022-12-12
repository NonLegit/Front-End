// MUI Components
import {
  Avatar, Box, Typography, Divider,
} from '@mui/material';
import { styled } from '@mui/material/styles';

// styles
import theme from '../../../../../styles/theme/index';

// CommentContainer
export const CommentContainer = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  //   flexWrap: 'nowrap',

  padding: '5px',
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
  padding: '5px 2px',

  // Children Margin
  '& > * ': {
    margin: '0px 3px',
  },

}));

// Image Avatar for comment
export const ImgAvatar = styled(Avatar)(() => ({
  width: '30px',
  height: '30px',
}));

// Link to Author of the Comment
export const AuthorLink = styled('a')(() => ({
  color: 'black',
  textDecoration: 'none',
  fontSize: '14px',
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

// CommentBody
export const CommentBody = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  padding: '2px 2px',
  //   flexWrap: 'nowrap',
  backgroundColor: 'blue',

}));

// Vertical Align of comment
export const CommentAlign = styled(Divider)(() => ({
  width: '100px',
  height: '10px',
  margin: '5px',
  border: 'none',
  color: theme.palette.third.main,
  backgroundColor: theme.palette.third.main,

  // transform: rotate(90),
}
));

// CommentContent
export const CommentContent = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  //   flexWrap: 'nowrap',
  backgroundColor: 'aqua',
}));
