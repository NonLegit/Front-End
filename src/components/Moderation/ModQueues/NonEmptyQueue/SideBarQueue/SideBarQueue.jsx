import CropSquareOutlinedIcon from '@mui/icons-material/CropSquareOutlined';
import { IconButton, Typography } from '@mui/material';
import { Arrow, SidebarQueue, SidebarQueueBox } from './styles';

function SideBarQueue(props) {
  const { subTitle } = props;
  return (
    <SidebarQueueBox>
      <SidebarQueue condition={(subTitle === 'Spam').toString()}>
        <IconButton size="large" sx={{ padding: 0, marginTop: 1 }}><CropSquareOutlinedIcon color="action" /></IconButton>
        <Arrow sx={{ transform: 'rotate(-90deg)' }} />
        <Typography variant="caption" sx={{ fontWeight: 700 }}>1</Typography>
        <Arrow sx={{ transform: 'rotate(90deg)' }} />
      </SidebarQueue>

    </SidebarQueueBox>
  );
}

export default SideBarQueue;
