import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const QueueBox = styled(Box)(() => ({
  width: 'auto',
  margin: '0 24px 0 24px',
  paddingTop: 24,

}));

export const QueueText = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: 20,
}));

export const ControlBar = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  backgroundColor: '#edeff1',
  height: '48px',
  padding: '0 24px',
}));

export const UserContainer = styled(Box)(() => ({
  marginBottom: '36px',
}));
