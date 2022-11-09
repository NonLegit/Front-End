import { Typography } from '@mui/material';
import {
  UpArrow, DownArrow, SidebarQueueBox,
} from './styles';

/**
 * sidebar of the post containing arrow up and down
 * @return {React.Component} - PostSidebar
 */
function PostSide(props) {
  const { points } = props;
  return (
    <SidebarQueueBox>
      <UpArrow />
      <Typography variant="caption" sx={{ fontWeight: 700 }}>{points}</Typography>
      <DownArrow />
    </SidebarQueueBox>
  );
}

export default PostSide;
