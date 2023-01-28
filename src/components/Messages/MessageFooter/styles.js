import styled from '@emotion/styled';
import { Link } from '@mui/material';

export const Footer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '40px 0px 24px',
}));
export const FooterLinks = styled('div')(() => ({
  display: 'flex',
  margin: '15px auto',
  maxWidth: '600px',
  flexWrap: 'wrap',
}));
export const Links = styled(Link)(({ location, theme }) => ({
  textDecoration: 'none',
  fontSize: location === 'End' ? 'x-small' : 'small',
  width: 'fit-content',
  color: location === 'End' ? 'grey' : theme.palette.primary.main,
  '&:visited': {
    color: '#80bce9',
  },
  '&:hover': {
    textDecoration: 'underline',
  },
}));
export const HeaderLinks = styled('span')(() => ({
  color: '#777',
  marginBottom: '5px',
  fontSize: '18px',
  fontWeight: 'normal',
}));
export const ContainerLinks = styled('div')(({ theme, first }) => ({
  display: 'flex',
  flexDirection: 'column',
  borderLeft: first === 'true' ? '' : '1px solid',
  borderColor: theme.palette.grey[300],
  padding: '0 15px',
  marginBottom: '18px',
}));
export const EndFooter = styled('p')(() => ({
  color: 'grey',
  fontSize: 'x-small',
  margin: '0px auto',
}));
