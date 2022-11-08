import styled from '@emotion/styled';

export const NotificationImage = styled('img')(() => ({
  borderRadius: ' 50%',
  height: '32px',
  width: '32px',
  objectFit: 'cover',
}));
export const ChildImage = styled('span')(({ theme }) => ({
  backgroundColor: theme.palette?.common.white,
  border: '1px solid #edeff1',
  borderRadius: ' 50%',
  boxShadow: ' 0 2px 4px rgb(0 0 0 / 5%)',
  height: '20px',
  left: '12px',
  position: 'absolute',
  top: '18px',
  width: '20px',
  color: theme.palette?.primary.main,
  '& svg': {
    fontSize: 'medium',
    paddingLeft: '1px',
  },
}));
export const ImageContiner = styled('div')(() => ({
  paddingRight: 8,
  position: 'relative',
}));
