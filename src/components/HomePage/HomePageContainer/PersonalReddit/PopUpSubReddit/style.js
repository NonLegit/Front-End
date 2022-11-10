import {
  Box, Button, DialogActions, DialogContent, DialogTitle as DialogT, Tooltip, tooltipClasses,
} from '@mui/material';
import { styled } from '@mui/material/styles';

export const DialogTitle = styled(DialogT)({
  fontWeight: 500,
  fontSize: 16,
  color: '#1c1c1c',
  display: 'flex',
  justifyContent: 'space-between',
  padding: 0,
});
export const BOX = styled(Box)({
  fontWeight: 500,
  fontSize: 16,
  color: '#1c1c1c',
  display: 'flex',
  // marginBottom: 16,
  padding: '0 0 16px 0px',
  justifyContent: 'space-between',
  borderBottom: '1px solid #edeff1',
});
export const Container = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  background: '#ffffff',
  boxSizing: 'border-box',
  padding: 0,
  position: 'relative',
  borderRadius: '0 4px 4px 0',
  flex: '1 1 100%',
  margin: 'auto',
  maxHeight: '100%',
  maxWidth: '100vw',
  overflowY: 'auto',
  marginTop: 0,
});
export const SecConatiner = styled(DialogContent)({
  marginBottom: 8,
  display: 'flex',
  flexFlow: 'row wrap',
  marginRight: 8,
  maxWidth: '100%',
  flexDirection: 'column',
  paddingLeft: 0,
});
export const Name = styled('h3')({
  fontSize: 16,
  color: '#1c1c1c',
  display: 'block',
  marginBottom: 4,
  height: 20,
  marginTop: 0,
});

export const Disc = styled('p')({
  fontWeight: 400,
  color: '#7c7c7c',
  fontSize: 12,
  height: 16,
  margin: 0,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
});
export const Count = styled('p')(({ condition }) => ({
  fontWeight: 400,
  color: '#7c7c7c',
  fontSize: 12,
  height: 16,
  margin: 0,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  ...((condition === 'true') && {
    color: 'red',
  }),
}));

export const SelectHeader = styled(DialogT)({
  fontWeight: 500,
  fontSize: 16,
  borderBottom: 'none',
  color: '#1c1c1c',
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: 16,
  padding: '0 0 16px',
});

export const Adult = styled(Box)({
  cursor: 'pointer',
  display: 'flex',

  flexDirection: 'row',
  alignItems: 'center',
});
export const NSFWs = styled(Box)({
  fontSize: 12,
  display: 'inline-block',
  backgroundColor: '#ff585b',
  borderRadius: 2,
  padding: '0 4px',
  color: '#fff',
  margin: '0 4px 0 -19px',
  verticalAlign: 'text-top',
  fontWeight: 500,
});
export const Warning = styled(Box)({
  fontWeight: 500,
  color: '#1c1c1c',
  fontSize: 14,
  display: 'inline-block',
  verticalAlign: 'top',
  paddingLeft: 4,
  marginTop: -1,
});
export const AdultContent = styled(DialogT)({
  fontWeight: 500,
  fontSize: 16,
  borderBottom: 'none',
  color: '#1c1c1c',
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: 16,
  padding: 0,
});
export const Actions = styled(DialogActions)({
  backgroundColor: '#edeff1',
  width: '100%',
  padding: 0,
  margin: 0,
  display: 'flex',
  justifyContent: 'flex-end',
  borderBottomRightRadius: 4,
});
export const Btn = styled(Button)({
  flexShrink: 0,
  width: 86,
  height: 30,
  color: '#1383d6',
  backgroundColor: '#edeff1',
  borderRadius: 9999,
  // '&:hover': {
  //   opacity: 0.1,
  // },
  textTransform: 'initial',

});
export const Cont = styled(Box)({
  display: 'flex',
  alignItems: 'center',
});

export const ContUp = styled(Box)(({ condition, condition2, theme }) => ({
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.between('0', '600')]: {
    alignItems: ' flex-start',
    display: 'flex',
    flexDirection: 'column',
    marginTop: 17,
    ...((condition === 'true') && {
      marginTop: 22,
    }),
    ...((condition2 === 'true') && {
      marginTop: 0,
    }),
  },
}));

export const StyledTooltip = styled(({ className, ...props }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));
