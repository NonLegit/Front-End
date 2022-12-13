import {
  Box, IconButton, Paper, styled,
} from '@mui/material';

export const ContentBox = styled(Box)(({ theme }) => ({
  width: 640,
  height: 'fit-content',
  [theme.breakpoints.between('0', '970')]: {
    width: '100%',
  },
}));

export const SearchBox = styled(Box)(() => ({
  backgroundColor: '#edeff1',
  alignItems: 'center',
  borderRadius: '4px 4px 0 0',
  boxSizing: 'border-box',
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: '8px 16px',
  display: 'flex',
}));

export const Search = styled(Paper)(() => ({

  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: '32px',
//   border: '1px solid #878a8c',
//   boxShadow: 'none',
}));

export const SearchIconButton = styled(IconButton)(() => ({
  padding: '10px',
  backgroundColor: '#878a8c',
  height: '100%',
  borderRadius: '0px 5px 5px 0px',
  '&:hover': {
    backgroundColor: '#878a8c',
  },
}));

export const FollowersBox = styled(Box)(() => ({
  backgroundColor: 'white',
  alignItems: 'center',
  justifyContent: 'space-between',
}));
