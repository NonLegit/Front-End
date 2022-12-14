import {
  styled, Tooltip,
  IconButton,
} from '@mui/material';
import { tooltipClasses } from '@mui/material/Tooltip';

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

export const NotificationButton = styled(IconButton)(() => ({
  display: 'flexx',
  justifyContent: 'center',
  alignItems: 'center',
}));
