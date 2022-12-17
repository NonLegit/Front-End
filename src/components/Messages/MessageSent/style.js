import styled from '@emotion/styled';
import { Link } from '@mui/material';

export const SentContiner = styled('div')(() => ({
  margin: '20px auto',
  width: '70%',
  minWidth: ' 700px',
}));
export const Message = styled('div')(({ theme, indx }) => ({
  padding: ' 10px 15px',
  backgroundColor: (indx % 2) ? '#f6f7f8' : theme.palette.common.white,
}));
export const MessageBody = styled('div')(() => ({
  padding: '10px 15px',
}));
export const MessageHeader = styled('h3')(() => ({
  margin: '0px 0px  0.5em 0px',
}));
export const LinkProfile = styled(Link)(({ type }) => ({
  color: (type === 'profile') ? '#4f79d3' : '#2f8822',
  textDecoration: 'none',
  cursor: 'pointer',
  '&:hover': {
    textDecoration: 'underline',
  },
}));
export const MessageContent = styled('div')(() => ({
  lineHeight: '1.5em',
  fontSize: '1.0769230769230769em',
  fontWeight: '400',
  marginTop: '10px',
  fontFamily: 'inherit',
  marginBottom: '10px',
}));
export const ReplayButton = styled('div')(() => ({
  color: '#888',
  fontWeight: 'bold',
  cursor: 'pointer',
  '&:hover': {
    textDecoration: 'underline',
  },
}));
