// MUI Components
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from '../../../styles/theme/index';

export const MultiLevelBodyConatiner = styled(Box)(() => ({
  // Modifieb by Bsaaaaaaaa
  // maxWidth: '800px',
  //   minWidth: '320px',
  // Modify min width
  // Margin used in te MultilLvel contsianter case small screen size
  // minWidth: '800px',
  width: '100%',
  padding: '2px 12px 0px 0px',

  display: 'flex',
  flexDirection: 'column',
  backgroundColor: theme.palette.white.main,
  borderRadius: '5px',

}));

// Post
export const PostContainer = styled(Box)(() => ({
  width: '100%',

  display: 'flex',
  flexDirection: 'row',

}));

// // MultiLevelRightSideContentConatiner [Beside the Reactions Bar]
// export const MultiLevelRightSideContentConatiner = styled(Box)(() => ({
//   width: '100%',
//   padding: '5px 15px',
//   display: 'flex',
//   flexDirection: 'column',
// }));
