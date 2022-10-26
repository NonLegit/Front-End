import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

export const Footer = styled('div')(() => ({
  padding: '12px 16px',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#fff',
  marginTop: 16,
  borderRadius: 7,
  fontSize: 12,
  position: 'sticky',
  top: 16,
  border: '1px solid #ccc',
}));

export const Column = styled(Link)(() => ({
  width: '50%',
  paddingBottom: 8,
  textDecoration: 'none',
  color: '#000',
}));

export const Row = styled('div')(() => ({
  display: 'flex',
  flexWrap: 'wrap',
}));
