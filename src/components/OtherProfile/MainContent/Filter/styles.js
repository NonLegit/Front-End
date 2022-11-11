import {
  Box, Button, styled,
} from '@mui/material';

export const FilterBox = styled(Box)(() => ({
  display: 'flex',
  backgroundColor: 'white',
  height: 56,
  padding: '10px 12px',
  border: '1px solid #ccc',
  marginBottom: 16,
}));

export const FilterSmallBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.between('600', '3000')]: {
    display: 'none',
  },
}));
export const FilterFullBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.between('0', '600')]: {
    display: 'none',
  },
}));

export const FilteButton = styled(Button)(({ condition, theme }) => ({
  color: '#878a8c',
  borderRadius: 15,
  marginRight: 8,

  ...((condition === 'true') && {
    color: theme.palette.primary.main,
    backgroundColor: '#f6f7f8',
  }),
  '&:hover': {
    backgroundColor: '#ededed',
  },
}));

export const SelectBox = styled(Box)(() => ({
//   width: 180,
  border: ' 1px solid #eee',
  marginTop: 60,
  marginLeft: 60,
  borderRadius: 4,
  boxShadow: '0 2px 4px 0 #eee',
  backgroundColor: 'white',
  position: 'absolute',
  zIndex: 10,
  display: 'flex',

}));

export const SelectItem = styled(Button)(({ condition, theme }) => ({

  color: '#878a8c',
  fontSize: 14,
  fontWeight: 'bold',
  justifyContent: 'center',
  textTransform: 'none',
  display: 'flex',
  ...((condition === 'true') && {
    color: theme.palette.primary.main,
  }),
  '&:hover': {
    color: 'black',
    backgroundColor: '#e9f5fd',
  },

}));
