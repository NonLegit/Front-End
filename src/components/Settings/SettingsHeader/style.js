import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

export const HeaderContiner = styled('h3')(() => ({
  margin: 0,
  padding: '16px 20px 20px',
  fontWeight: '700',

}));
export const SettingsContiner = styled('section')(() => ({
  backgroundColor: '#fff',
  minHeight: 'calc( 100vh - 48px )',
  paddingLeft: '28px',
}));
export const TabsContiner = styled('div')(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  margin: '0 auto',

  borderBottom: '1px solid #EDEFF1',
}));
export const Tab = styled(Link)(({ active, theme }) => ({
  cursor: 'pointer',
  padding: '15px 12px 12px',
  marginRight: '8px',
  display: 'flex',
  color: '#848485',
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: '600',
  textDecoration: 'none',
  borderBottom: '',
  ...((active) && {
    color: 'black',
    borderBottom: `3px solid ${theme.palette.primary.main}`,
  }),
  '&:hover': {
    color: 'black',

  },
}));
export const TabText = styled('div')(() => ({

}));
