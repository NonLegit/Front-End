import { Box, Button, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CommentsBoxContent = styled(Box)(() => ({
  width: '100%',
  // height: 90,
  display: 'flex',
  alignItems: 'stretch',
  // alignItems: 'center',
  paddingLeft: 20,
  padding: '8px 8px 8px 16px',
  verticalAlign: 'baseline',

  // justifyContent: 'center',
  '&:hover': {
    border: '1px solid #898989',
  },
}));

export const CommentsBoxBlue = styled(Box)(({ theme }) => ({
  // backgroundColor: '#0079d30d',
  [theme.breakpoints.between('0', '950')]: {
    width: '100%',
  },
}));

export const CommentsButton = styled(Button)(({ theme }) => ({
  color: theme.palette.grey.A400,
  fontSize: 12,
  fontWeight: 700,
  padding: 0,
}));

export const DashedLine = styled(Box)(() => ({
  borderLeft: '2px dashed #edeff1',
  flex: '0 0 1px',
  width: 3,
  height: 'inherit',
  marginRight: 16,
  verticalAlign: 'baseline',
}));

export const MoreList = styled(IconButton)(() => ({
  '&:hover': {
    backgroundColor: 'transparent',
  },
}));

export const SelectBox = styled(Box)(({ theme }) => ({
  width: 260,
  marginTop: 120,
  marginRight: 60,
  border: ' 1px solid #eee',
  borderRadius: 4,
  boxShadow: '0 2px 4px 0 #eee',
  backgroundColor: 'white',
  position: 'absolute',
  zIndex: 10,
  [theme.breakpoints.between('0', '860')]: {
    marginLeft: -230,
  },
  [theme.breakpoints.between('0', '420')]: {
    width: 200,
    marginLeft: -180,
  },

}));

export const SelectItem = styled(Button)(({ theme, condition }) => ({
  padding: 5,
  color: '#878a8c',
  fontSize: 14,
  fontWeight: 700,
  width: '100%',
  justifyContent: 'left',
  textTransform: 'none',
  ...((condition === 'true') && {
    color: theme.palette.primary.main,
  }),
}));
