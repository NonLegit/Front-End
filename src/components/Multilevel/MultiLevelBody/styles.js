// MUI Components
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from '../../../styles/theme/index';

export const MultiLevelBodyConatiner = styled(Box)(() => ({
  maxWidth: '720px',
  //   minWidth: '320px',
  // Modify min width
  // Margin used in te MultilLvel contsianter case small screen size
  minWidth: '720px',

  display: 'flex',
  flexDirection: 'row',
  // flexWrap: 'wrap',
  backgroundColor: theme.palette.white.main,
  borderRadius: '5px',

}));

// MultiLevelRightSideContentConatiner [Beside the Reactions Bar]
export const MultiLevelRightSideContentConatiner = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
}));
