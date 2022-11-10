import HomeIcon from '@mui/icons-material/Home';
import ContactlessOutlinedIcon from '@mui/icons-material/ContactlessOutlined';
import {
  List, ListItemButton, ListItemIcon, ListItemText,
  Collapse, ListSubheader,
} from '@mui/material';
import ExpandMore from '@mui/icons-material/ExpandMore';
import * as React from 'react';
import OutboundOutlinedIcon from '@mui/icons-material/OutboundOutlined';
import Avatar from '@mui/material/Avatar';
import AddIcon from '@mui/icons-material/Add';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import StyledList from './styles';
import Reddit from '../assests/Reddit.svg';

function HomeList() {
  const [OpenHomeList, setOpenHomeList] = React.useState(0);
  const handleClickHomeList = () => {
    setOpenHomeList(!OpenHomeList);
  };
  const FeedsList = [
    { icon: <HomeIcon />, label: 'home' },
    { icon: <OutboundOutlinedIcon />, label: 'popular' },
    { icon: <ContactlessOutlinedIcon />, label: 'all' },
  ];
  const OthersList = [
    { icon: <Avatar src={Reddit} />, label: 'user settings' },
    { icon: <Avatar src={Reddit} />, label: 'messages' },
    { icon: <AddIcon sx={{ fontSize: 30 }} />, label: 'create post' },
    { icon: <ContactlessOutlinedIcon />, label: 'top communities' },
    { icon: <NotificationsNoneIcon />, label: 'notifications' },
  ];
  return (
    <StyledList>
      <ListItemButton onClick={handleClickHomeList}>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" sx={{ color: 'black', paddingLeft: '5px' }} />
        <ExpandMore sx={{ color: '#757575', fontSize: 20 }} />
      </ListItemButton>
      <Collapse in={Boolean(OpenHomeList)} timeout="auto" unmountOnExit>
        <List component="div" disablePadding sx={{ position: 'absolute', width: '270px', left: '0px' }} subheader={<ListSubheader>feeds</ListSubheader>}>
          {FeedsList.map((items) => (
            <ListItemButton>
              <ListItemIcon>
                {items.icon}
              </ListItemIcon>
              <ListItemText primary={items.label} />
            </ListItemButton>
          ))}
          <List component="div" disablePadding sx={{ position: 'absolute', width: '270px' }} subheader={<ListSubheader>others</ListSubheader>}>
            {
              OthersList.map((items) => (
                <ListItemButton>
                  <ListItemIcon>
                    {items.icon}
                  </ListItemIcon>
                  <ListItemText primary={items.label} />
                </ListItemButton>
              ))
            }
          </List>
        </List>
      </Collapse>
    </StyledList>
  );
}

export default HomeList;
