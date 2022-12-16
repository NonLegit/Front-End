import {
  styled, Tooltip, tooltipClasses,
  IconButton,
  Button,
} from '@mui/material';

export const AboutString = styled('div')({
  fontSize: 18,
  fontWeight: 500,
  color: 'black',
  paddingBottom: 8,
});
export const AboutDisc = styled('div')({
  fontSize: 14,
  fontWeight: 500,
  color: 'black',
});
export const AddFlair = styled('div')(({ theme }) => ({

  minWidth: 350,
  whiteSpace: 'nowrap',
  alignItems: 'center',
  backgroundColor: '#edeff1',
  display: 'flex',
  flexDirection: 'row',
  height: 48,
  justifyContent: 'flex-end',
  left: 280,
  padding: '0 24px',
  right: 0,
  marginTop: -17,
  Zindex: 3,
  [theme.breakpoints.between('0', '1200')]: {
    marginTop: -17,
  },
}));
export const LeftAlighne = styled('div')(({ theme }) => ({
  [theme.breakpoints.between('1200', '5000')]: {
    marginLeft: 303,
    paddingTop: 49,
    backgroundColor: '#dae0e6',
  },
}));
export const Add = styled(Button)(({ theme }) => ({

  backgroundColor: '#0079d3',
  color: 'white',
  textTransform: 'unset',
  borderRadius: 999,
  height: 32,
  width: 106,
  fontWeight: 700,
  position: 'absolute',
  boxShadow: 'none',
  right: 0,
  margin: '0 24px',
  '&:hover': {
    backgroundColor: '#0079d3',
    color: 'white',
  },
  [theme.breakpoints.between('0', '1200')]: {
    margin: 0,
  },
}));
export const IconBtn = styled(IconButton)(() => ({
  padding: 0,
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
export const TotalContainer = styled('div')({
  backgroundColor: '#dae0e6',
  paddingtop: 64,
});
export const Header = styled('div')({
  padding: '26px 0 16px ',
});
