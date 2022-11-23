import { styled } from '@mui/system';

export const DisplayName = styled('input')(() => ({
  height: '48px',
  marginBottom: '8px',
  borderRadius: '4px',
  padding: '12px 24px 4px 12px',
  width: '100%',
  border: '1px solid #EDEFF1',
  marginTop: '12px',
}));
export const About = styled('textarea')(() => ({
  width: '100%',
  padding: '8px',
  border: '1px solid #EDEFF1',
  marginTop: '12px',
}));
export const AddSocialLinks = styled('div')(() => ({
  marginTop: '12px',
  fontSize: '12px',
  fontWeight: '700',
  lineHeight: '16px',
  alignItems: 'center',
  backgroundColor: '#EDEFF1',
  borderRadius: '9999px',
  color: '#1c1c1c',
  cursor: 'pointer',
  display: 'flex',
  height: '47px',
  marginRight: '8px',
  padding: ' 10px 12px',
  width: 'fit-content',
}));
