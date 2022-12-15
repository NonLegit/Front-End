import {
  styled, Tooltip, tooltipClasses,
  IconButton,
  Button,
} from '@mui/material';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';

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
export const IconBtn = styled(IconButton)(() => ({
  padding: 0,
}));
export const TableHeader = styled(Table)(() => ({
  // marginLeft: 279,
  width: '-webkit-fill-available',
  height: 54.4,
  backgroundColor: '#f6f7f8',

}));
export const TableHeaderCellContainer = styled(TableRow)(() => ({
  backgroundColor: '#f6f7f8',
  color: '#878a8c',
  fontSize: 10,
  fontWeight: 700,
  letterSpacing: 0.5,
  textTransform: 'uppercase',
  alignItems: 'center',
  borderRadius: '4px 4px 0 0',
  // padding: 16,
  verticalAlign: 'middle',
  whiteSpace: 'nowrap',
  height: 54.4,
}));

export const TableHeaderCell = styled(TableCell)(() => ({
  backgroundColor: '#f6f7f8',
  color: '#878a8c',
  fontSize: 10,
  fontWeight: 700,
  letterSpacing: 0.5,
  textTransform: 'uppercase',
  alignItems: 'center',
  borderRadius: '4px 4px 0 0',
  verticalAlign: 'middle',
  padding: 0,
  whiteSpace: 'nowrap',
  height: 54.4,
  borderBottom: 0,
}));
export const TableHeaderCellRes = styled(TableCell)(({ theme }) => ({
  [theme.breakpoints.between('1200', '5000')]: {
    backgroundColor: '#f6f7f8',
    color: '#878a8c',
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
    alignItems: 'center',
    borderRadius: '4px 4px 0 0',
    verticalAlign: 'middle',
    padding: 0,
    whiteSpace: 'nowrap',
    height: 54.4,
    borderBottom: 0,
  },
  [theme.breakpoints.between('0', '1200')]: {
    display: 'none',
  },
}));

export const POSTFLAIRPREVIEW = styled(TableCell)(() => ({
  backgroundColor: '#f6f7f8',
  color: '#878a8c',
  fontSize: 10,
  fontWeight: 700,
  letterSpacing: 0.5,
  textTransform: 'uppercase',
  alignItems: 'center',
  borderRadius: '4px 4px 0 0',
  borderBottom: 0,
  verticalAlign: 'middle',
  padding: 0,
  whiteSpace: 'nowrap',
  height: 54.4,
  paddingLeft: 17,
}));
export const Body = styled(TableBody)(() => ({
  color: 'black',
  maxWidth: '100%',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
}));

export const AboutString = styled('h2')({
  fontSize: 18,
  fontWeight: 500,
  color: 'black',
  marginBottom: 16,
  paddingLeft: 17,

});
export const AddFlair = styled('div')(({ theme }) => ({

  // minWidth: 400,
  whiteSpace: 'nowrap',
  alignItems: 'center',
  backgroundColor: '#edeff1',
  display: 'flex',
  flexDirection: 'row',
  height: 48,
  justifyContent: 'flex-end',
  left: 280,
  padding: '0 24px',
  position: 'fixed',
  right: 0,
  marginTop: 9,
  Zindex: 3,
  [theme.breakpoints.between('0', '1200')]: {
    backgroundColor: 'transparent',

  },
}));
export const LeftAlighne = styled('div')(({ theme }) => ({
  [theme.breakpoints.between('1200', '5000')]: {
    marginLeft: 303,
    paddingTop: 49,
    backgroundColor: '#dae0e6',
  },
}));
export const TotalContainer = styled('div')({
  backgroundColor: '#dae0e6',
});
export const Add = styled(Button)(({ condition, theme }) => ({
  backgroundColor: '#0079d3',
  color: 'white',
  textTransform: 'unset',
  borderRadius: 999,
  height: 32,
  width: 106,
  fontWeight: 700,
  boxShadow: 'none',
  right: 0,
  margin: '0 24px',
  '&:hover': {
    backgroundColor: '#0079d3',
    color: 'white',
  },
  ...((condition) && {
    color: '#ffffff80',
    backgroundColor: 'transparent',
    border: '1px solid #848484',
  }),
  [theme.breakpoints.between('0', '1200')]: { marginBottom: 30 },
}));
