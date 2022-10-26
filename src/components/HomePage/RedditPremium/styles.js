import { styled } from '@mui/system';

export const PremiumReddit = styled('div')(() => ({
  padding: 12,
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#fff',
  marginTop: 16,
  borderRadius: 7,
  border: '1px solid #ccc',
}));

export const Header = styled('div')(() => ({
  fontSize: 13,
  fontWeight: '500',
}));

export const Paragraph = styled('div')(() => ({
  fontSize: 12,
  fontWeight: '400',
}));
