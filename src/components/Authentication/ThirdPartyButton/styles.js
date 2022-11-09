import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from '../../../styles/theme';

export const ThirdPartyContainer = styled(Box)(({ width }) => ({
  width: `${width}`,
  margin: '15px 0px',
}));

export const ThirdPartyBtn = styled(Button)(() => ({
  width: '100%',
  height: 50,
  margin: '10px 0px',
  padding: '0px',
  border: '1.2.5px solid',

  fontFamily: 'ibm-plex-sans,sans-serif',
  fontWeight: '600',
  fontSize: '14px',
  letterSpacing: '0.5px',

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',

  '&:hover': {
    backgroundColor: theme.palette.primary.light,
    color: 'white',
  },
}));

export const ButtonIcon = styled('img')(() => ({
  width: 30,
  borderRadius: 4,
  marginLeft: '5px',
  marginRight: '20px',
}));
