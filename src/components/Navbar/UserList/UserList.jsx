import {
  List, ListItemButton, ListItemIcon, Collapse, Box, Typography, Divider, ListItemText,
} from '@mui/material';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Avatar from '@mui/material/Avatar';
import * as React from 'react';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import ExpandLess from '@mui/icons-material/ExpandLess';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
import Reddit from '../assests/Reddit.svg';
import {
  StyledList,
} from './styles';
import karma from '../assests/karma.png';
import { FirstList, SecondList, ExploreList } from './Lists';

function UserList() {
  const [OpenUserList, setOpenUserList] = React.useState(0);
  const handleClickUserList = () => {
    setOpenUserList(!OpenUserList);
  };

  const [OpenExploreList, setOpenExploreList] = React.useState(0);
  const handleClickExploreList = () => {
    setOpenExploreList(!OpenExploreList);
  };

  const [OpenSubList, setOpenSubList] = React.useState(0);
  const handleClickSubList = () => {
    setOpenSubList(!OpenSubList);
  };

  return (
    <StyledList>
      <ListItemButton onClick={handleClickUserList}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <ListItemIcon>
            <Box>
              <Avatar src={Reddit} />
            </Box>
          </ListItemIcon>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: 'column', paddingRight: '60px' }}>
            <Typography sx={{ fontSize: '12px', color: '#1C1C1C' }}>username</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img alt="" src={karma} width={12} height={12} />
              <Typography sx={{ fontSize: '12px', color: '#A8AAAB', whiteSpace: 'nowrap' }}> 1 karma</Typography>
            </Box>
          </Box>
        </Box>
        <ExpandMore sx={{ color: '#757575', fontSize: 20 }} />
      </ListItemButton>
      <Collapse in={Boolean(OpenUserList)} timeout="auto" unmountOnExit>
        <List component="div" disablePadding sx={{ position: 'absolute', width: '100%' }}>
          <ListItemButton>
            <ListItemIcon sx={{ display: 'contents' }}>
              <AccountCircleOutlinedIcon sx={{ color: '#787C7E' }} />
            </ListItemIcon>
            <ListItemText primary="my stuff" />
          </ListItemButton>
          {FirstList.map((items) => (
            <ListItemButton>
              <ListItemText primary={items} />
            </ListItemButton>
          ))}
          <Divider />
          {SecondList.map((items) => (
            <ListItemButton>
              <ListItemIcon sx={{ display: 'contents' }}>
                {items.icon}
              </ListItemIcon>
              <ListItemText primary={items.label} />
            </ListItemButton>
          ))}
          <ListItemButton onClick={handleClickExploreList}>
            <ListItemIcon sx={{ display: 'contents' }}>
              <AutoFixHighOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Explore" />
            {OpenExploreList ? <ExpandLess sx={{ color: '#000000', fontSize: 20 }} /> : <ExpandMore sx={{ color: '#000000', fontSize: 20 }} />}
          </ListItemButton>
          <Collapse in={Boolean(OpenExploreList)} timeout="auto" unmountOnExit>
            {
                ExploreList.map((Sub) => (
                  <>
                    <ListItemButton onClick={handleClickSubList}>
                      <ListItemText primary={Sub.SubList} />
                      {OpenSubList ? <ExpandLess sx={{ color: '#000000', fontSize: 20 }} /> : <ExpandMore sx={{ color: '#000000', fontSize: 20 }} />}
                    </ListItemButton>
                    <Collapse in={Boolean(OpenSubList)} timeout="auto" unmountOnExit>
                      {Sub.Content.map((items) => (
                        <ListItemButton>
                          <ListItemText primary={items} />
                        </ListItemButton>
                      ))}
                    </Collapse>
                  </>
                ))
              }
          </Collapse>
          <Divider />
          <ListItemButton>
            <ListItemIcon sx={{ display: 'contents' }}>
              <LoginOutlinedIcon sx={{ color: 'black', fontSize: 25 }} />
            </ListItemIcon>
            <ListItemText primary="log out" />
          </ListItemButton>
        </List>
      </Collapse>
    </StyledList>
  );
}

export default UserList;
