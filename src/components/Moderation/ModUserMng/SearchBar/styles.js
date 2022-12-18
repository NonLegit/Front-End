import { InputBase, styled, Box } from '@mui/material';

export const StyledInputBase = styled(InputBase)(() => ({
  '& .MuiInputBase-input': {
    backgroundColor: 'white',
    borderRadius: '4px 0 0 4px',
    border: '1px solid #878a8c',
    padding: '8px',
    width: '248px',
    height: '13px',
    color: '#616364',
    '&:focus': {
      border: '2px solid #000000',
      borderRadius: '4px',
    },
  },
}));

export const StyledIconWrapper = styled(Box)(() => ({
  backgroundColor: '#878a8c',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '0 4px 4px 0',
  height: '32px',
  width: '40px',
}));

export const StyledSearchBar = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#edeff1',
  borderRadius: '4px 4px 0 0',
  height: '48px',
  margin: '0px 24px',
}));

export const StyledSearchContainer = styled(Box)(() => ({
  display: 'flex', padding: '8px 16px', alignItems: 'center',
}));
