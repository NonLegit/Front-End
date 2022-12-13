import { styled } from '@mui/material/styles';
import { ButtonBase } from '@mui/material';
import { Link } from 'react-router-dom';

export const AboutCountainer = styled('div')({
  fontSize: 10,
  fontWeight: 700,
  letterSpacing: 0.5,
  backgroundColor: '#ffffff',
  borderRadius: '3px 3px 0 0',
  color: '#1a1a1b',
  display: 'flex',
  fill: '#1a1a1b',
  textTransform: 'uppercase',
  margin: 0,

});

export const AboutString = styled('h2')({
  padding: '12px 0 0',
  margin: 0,
  fontSize: 14,
  fontWeight: 700,
  textTransform: 'none',
});

export const CustomLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  display: 'flex',
  flexDirection: 'column',
  color: theme.palette.primary.main,
  '&:hover': {
    textDecoration: 'none',
  },
}));

export const Button = styled(ButtonBase)(({
  fontSize, fontWeight, backgroundColor,
}) => ({
  boxShadow: 'none',
  backgroundColor,
  fontSize,
  borderRadius: 20,
  textTransform: 'initial',
  minWidth: 'auto',
  fontWeight,
  alignItems: 'center',
  display: 'flex',
  marginBottom: 20,
  justifyContent: 'center',
  padding: '4px 16px',
  textalign: 'center',
  border: '1px solid #0079d3',
  height: 30,
}));

export const Container = styled('div')(() => ({
  fontSize: 12,
  fontWeight: 500,
  display: 'flex',
  marginBottom: 16,
  width: '100%',

}));
export const Name = styled(Link)(() => ({
  cursor: 'pointer',
  color: '#0079d3',
  display: 'inline-block',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'none',
  },
}));
export const Data = styled('div')(() => ({
  backgroundColor: '#EDEFF1',
  color: '#1A1A1B',
  fontSize: 12,
  fontWeight: 500,
  borderRadius: 2,
  display: 'inline-block',
  marginRight: 5,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  verticalAlign: 'text-bottom',
  whiteSpace: 'pre',
  wordBreak: 'normal',
  padding: '0px 4px',
  marginLeft: 4,
}));
export const ViewAllContainer = styled('div')(() => ({
  display: 'flex',
  overflow: 'hidden',
  padding: '0 12px 12px',
}));
export const ViewAll = styled(Link)(() => ({
  fontSize: 12,
  fontWeight: 700,
  letterSpacing: '.5px',
  textTransform: 'uppercase',
  color: '#0079d3',
  marginLeft: 'auto',
  cursor: 'pointer',
}));
