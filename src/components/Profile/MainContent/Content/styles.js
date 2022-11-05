import { Box, styled } from '@mui/material';

export const ContentBox = styled(Box)(() => ({
  width: 640,
  //   backgroundColor: 'white',
  height: 'fit-content',
}));

export const NEW = styled(Box)(() => ({
  height: 76,
  backgroundColor: 'white',
  border: '1px solid #edeff1',
  borderRadius: 4,
  marginBottom: 10,
  padding: 16,
  display: 'flex',
  alignItems: 'center',

}));
export const NewBox = styled(Box)(() => ({

  boxShadow: '0 0 8px #6a5cff66',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  color: '#1c1c1c',
  fontWeight: 500,
  fontSize: 16,
  padding: 12,
  borderRadius: 8,

}));
