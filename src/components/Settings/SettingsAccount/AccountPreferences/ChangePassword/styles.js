import { styled } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import {
  Box,
} from '@mui/material';

export const Contanier = styled('div')(() => ({
  position: 'relative',
  height: '700px',
}));
export const IconClose = styled(IconButton)(() => ({
  position: 'absolute',
  right: 8,
  top: 8,
  color: (theme) => theme.palette.grey[500],
}));
export const AuthenticationBG = styled(Box)(() => ({
  height: '700px',
  width: '156px',
  backgroundImage: 'url("https://www.redditstatic.com/accountmanager/bbb584033aa89e39bad69436c504c9bd.png")',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}));

export const AuthenticationBody = styled(Box)(({ mnwidth, mxwidth }) => ({
  height: '700px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  padding: '0px 20px',

  '&>*': {
    minWidth: `${mnwidth}`,
    maxWidth: `${mxwidth}`,
  },
}));
export const AuthenticationConatiner = styled(Box)(() => ({

  height: '70px',
  backgroundColor: 'white',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'space-around',
  justifyContent: 'flex-start',

}));
