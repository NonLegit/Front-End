// MUI Components
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

// Components
import RedditButton from '../../../RedditButton/RedditButton';

// MultiLevelContentConatiner
export const MultiLevelContentConatiner = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'nowrap',

  padding: '0px 10px',
  marginTop: '5px',

  '& > *': {
    margin: '10px 0px',
  },

  // border: '5px solid #abcabc',
}));

// PostHeader
export const PostHeader = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  flexWrap: 'wrap',

  // width: '100%',
  // display: 'flex',
  // flexDirection: 'column',
  // flexWrap: 'nowrap',

  // padding: '0px 10px',
  // marginTop: '5px',

  '& > *': {
    margin: '0px 5px !important',
  },

  // border: '5px solid #abcabc',
}));

// Save button
export const SaveButton = styled(RedditButton)(() => ({
  padding: '3px 20px',
  fontSize: 14,
  fontWeight: 'bold',
  '&.Mui-disabled': {
    cursor: 'not-allowed',
    pointerEvents: 'auto',
    backgroundColor: '#8D8D8D',
    color: '#ffffff80',
  },
}));
