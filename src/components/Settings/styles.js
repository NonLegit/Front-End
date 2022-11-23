import { styled } from '@mui/system';

export const Button = styled('div')(() => ({
  marginBottom: '32px',
  display: 'flex',
  flexFlow: 'row wrap',
}));
export const Content = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  marginRight: '8px',
  maxWidth: '80%',
}));
export const ContentHeader = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  fontWeight: '600',
  fontSize: '16px',
  lineHeight: '20px',
}));
export const ContentSubHeader = styled('div')(() => ({
  fontWeight: '400',
  color: '#7c7c7c',
  fontSize: '12px',
  lineHeight: '16px',
}));
export const AntSwitch = styled('div')(() => ({
  alignItems: 'center',
  display: 'flex',
  justifyContent: ' flex-end',
  flexGrow: 1,
}));
export const Header = styled('h2')(() => ({
  padding: '32px 0px',
  fontSize: ' 20px',
  fontWeight: '600',
  lineHeight: ' 24px',
}));
export const SubHeader = styled('h2')(() => ({
  fontSize: '10px',
  fontWeight: '700',
  letterSpacing: '.5px',
  lineHeight: ' 12px',
  marginBottom: '32px',
  paddingBottom: '6px',
  color: '#7c7c7c',
  borderBottom: '1px solid #EDEFF1',
}));
export const SettingsPageConranier = styled('div')(() => ({
  padding: ' 0 16px',
  display: 'flex',
  maxWidth: '1200px',
  margin: '0 auto',
  marginBottom: '32px',
}));
export const Text = styled('div')(() => ({
  marginBottom: 32,
}));
export const SettingsContiner = styled('section')(() => ({
  backgroundColor: '#fff',
  minHeight: 'calc( 100vh - 48px )',
  paddingLeft: '28px',
  overflow: 'auto',
}));
