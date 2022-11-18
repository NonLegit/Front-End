import {
  styled,
  Box, DialogContent, DialogTitle as DialogT, Tooltip, tooltipClasses,
} from '@mui/material';

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
export const DialogTitle = styled(DialogT)({
  fontWeight: 500,
  fontSize: 16,
  color: '#1c1c1c',
  display: 'flex',
  justifyContent: 'space-between',
  padding: 0,
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
