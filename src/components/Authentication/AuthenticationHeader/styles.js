import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const AuthHeaderConatiner = styled(Box)(() => ({
//   height: `${height}`,
//   width: `${width}`,
//   minWidth: `${mnwidth}`,
//   maxWidth: `${mxwidth}`,
//   padding: '5px',
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'space-around',
  width: '100%',
  marginBottom: '20px',
}));

export const AuthTitle = styled(Typography)(() => ({
  fontSize: '18px',
  fontWeight: '550',
  fontFamily: 'ibm-plex-sans,sans-serif',
  fontStyle: 'normal',
  lineHeight: '22px',
  marginBottom: '5px',
}));

export const AuthTitleCaption = styled(Typography)((fontSize) => ({
  fontSize: (fontSize !== undefined) ? `${fontSize}` : '12px',
  fontFamily: 'Noto Sans,sans-serif',
  fontWeight: '400',
}));
