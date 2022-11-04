import styled from '@emotion/styled';

export const Notification = styled('section')(() => ({
  padding: '20px 24px',
  maxWidth: ' 1248px',
  margin: ' 0 auto',
}));
export const NotificationsContiner = styled('div')(({ theme }) => ({
  margin: '0 auto',
  maxWidth: '648px',
  background: theme.palette.common.white,
  borderRadius: ' 4px',
}));
export const NotificationsHead = styled('div')(() => ({
  fontSize: 18,
  fontWeight: 600,
  lineHeight: '22px',
  padding: '8px 16px',

}));
