import styled from '@emotion/styled';

export const ContinerNotifications = styled('section')(() => ({
  background: '#dae0e6',
}));
export const HeaderContiner = styled('div')(() => ({
  height: 131,
  margin: '0 auto',
  width: 648,
}));
export const NotificationsHead = styled('h1')(() => ({
  padding: ' 40px 0px 21px',
  fontSize: 22,
  fontWeight: '600',
  lineHeight: '26px',
  margin: 0,
}));
export const TabsContiner = styled('div')(() => ({
  display: 'flex',
}));
export const TabText = styled('div')(() => ({
  marginLeft: 6,
}));
export const Tab = styled('div')(({ theme, index, active }) => ({
  fontWeight: '700',
  fontSize: '14px',
  color: '#848485',
  marginRight: index === '2' ? 'auto' : '',
  padding: ' 15px 17px 12px',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderBottom: index === '1' ? `3px solid ${theme.palette.primary.main}` : '',
  ...((active === 1) && {
    div: {
      color: 'black',
    },
  }),
  '&:hover div': {
    color: 'black',
  },
}));
