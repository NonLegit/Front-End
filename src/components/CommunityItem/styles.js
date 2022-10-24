import { Avatar, ListItem, Typography } from '@mui/material';
import { styled } from '@mui/system';

export const CommunityListItem = styled(ListItem)(() => ({
  padding: 8,
}));
export const CommunityName = styled(Typography)(() => ({
  fontSize: 14,
  fontWeight: 'bold',
  maxWidth: 123,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
}));

export const CommunityImage = styled(Avatar)(() => ({
  width: 32,
  height: 32,
  marginLeft: 8,
  marginRight: 8,
}));

export const CommunityIndex = styled('div')(() => ({
  marginRight: 10,
  marginLeft: 8,
  fontWeight: 'bold',
}));
