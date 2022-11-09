import { Box, styled } from '@mui/material';

const search = styled(Box)(() => ({
  position: 'relative',
  marginLeft: '34px',
  marginRight: '34px',
  width: '100%',
  backgroundColor: '#F6F7F8',
  border: '1px solid #edeff1',
  borderRadius: '1.25em',
  padding: '0px',
  margin: '0px 16px',
  display: 'flex',
  alignItems: 'center',
  boxSizing: 'border-box',
  height: '38px',
  '&:hover': {
    backgroundColor: 'white',
    border: '1px solid #0079d3',
  },
  '&:hover .MuiInputBase-root': {
    backgroundColor: 'white',
  },
  '& .MuiSvgIcon-root': {
    height: '25px',
    width: '50px',
    position: 'relative',
    color: '#878a8c',
    display: 'flex',
    padding: '0px 9px 0px 15px',
    alignItems: 'center',
  },
  '& .MuiInputBase-root': {
    position: 'relative',
    backgroundColor: '#F6F7F8',
    marginRight: '16px',
    width: '100%',
    padding: '0px 0px 0px 0px',
    placeholder: 'Search nonlegit',
  },
}));

export default search;
