import { Typography } from '@mui/material';
import {
  UpArrow, DownArrow, SidebarQueueBox,
} from './styles';

function PostSide() {
  return (
    <SidebarQueueBox>
      <UpArrow />
      <Typography variant="caption" sx={{ fontWeight: 700 }}>1</Typography>
      <DownArrow />
    </SidebarQueueBox>
  );
}

export default PostSide;
