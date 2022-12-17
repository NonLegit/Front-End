import {
  styled,
} from '@mui/material';
import theme from '../../styles/theme';

export const Close = styled('div')(({ type }) => ({
  backgroundColor: (type === 'success') ? theme.palette.primary.main : 'red',
  cursor: 'pointer !important',
  display: 'flex',
  alignItems: 'center',
  height: '50px',
  width: '20px',
  color: '#f4f0f0',
  transition: 'all 0.3s',
  '.icon': {
    display: 'none',
  },
}));
export const Image = styled('img')(() => ({
  width: '30px',
  height: '30px',
  objectFit: 'cover',
}));
export const Info = styled('div')(() => ({
  padding: '8px 12px 8px 0px',
  display: 'flex',
  gap: '8px',
  alignItems: 'center',
}));

export const Container = styled('div')(() => ({
  border: '1px solid black',
  boxShadow: '0 2px 4px 0 rgba(28,28,28,0.2)',
  width: '300px',
  gap: '5px',
  backgroundColor: 'white',
  marginBottom: '12px',
  borderRadius: '7px',
  transition: 'all 0.3s',
  display: 'flex',
  alignItems: 'center',
  '&:hover': {
    '.close': {
      width: '30px',
      '.icon': {
        display: 'block',
      },
    },
  },
}));
