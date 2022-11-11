/* eslint-disable react/no-array-index-key */
import {
  List, ListItemButton, ListItemIcon, Collapse, Box, Typography, Divider, ListItemText,
} from '@mui/material';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ExpandLess from '@mui/icons-material/ExpandLess';
import Avatar from '@mui/material/Avatar';
import * as React from 'react';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
import Reddit from '../assests/Reddit.svg';
import {
  StyledList,
} from './styles';
import karma from '../assests/karma.png';
import { firstList, secondList, exploreList } from './Lists';

/**
 *
 * @returns {React.Component} the User list which is the right lish in logged in navbar.
 */
function UserList() {
  const [openUserList, setOpenUserList] = React.useState(0);
  const handleClickUserList = () => {
    setOpenUserList(!openUserList);
  };

  const [openExploreList, setOpenExploreList] = React.useState(0);
  const handleClickExploreList = () => {
    setOpenExploreList(!openExploreList);
  };

  const [openSubList, setOpenSubList] = React.useState([0, 0, 0, 0, 0, 0, 0]);
  const handleClickSubList = (index) => {
    const arr = [0, 0, 0, 0, 0, 0, 0];
    arr[index] = (openSubList[index] === 1) ? 0 : 1;
    setOpenSubList(arr);
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
      <Collapse in={Boolean(openUserList)} timeout="auto" unmountOnExit>
        <List component="div" disablePadding sx={{ position: 'absolute', width: '100%' }}>
          <ListItemButton disabled>
            <ListItemIcon sx={{ display: 'contents' }}>
              <AccountCircleOutlinedIcon sx={{ color: '#787C7E' }} />
            </ListItemIcon>
            <ListItemText primary="my stuff" />
          </ListItemButton>
          {
          firstList.map((items, index) => (
            <ListItemButton key={`${index + 0}`}>
              <ListItemText primary={items} />
            </ListItemButton>
          ))
          }
          <Divider />
          {secondList.map((items, index) => (
            <ListItemButton key={`${index + 0}`}>
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
            {openExploreList ? <ExpandLess sx={{ color: '#000000', fontSize: 20 }} /> : <ExpandMore sx={{ color: '#000000', fontSize: 20 }} />}
          </ListItemButton>
          <Collapse in={Boolean(openExploreList)} timeout="auto" unmountOnExit>
            {
                exploreList.map((Sub, index) => (
                  <>
                    <ListItemButton key={`${index + 0}`} onClick={() => { handleClickSubList(index); }}>
                      <ListItemText primary={Sub.SubList} />
                      {openSubList[index] ? <ExpandLess sx={{ color: '#000000', fontSize: 20 }} /> : <ExpandMore sx={{ color: '#000000', fontSize: 20 }} />}
                    </ListItemButton>
                    <Collapse in={Boolean(openSubList[index])} timeout="auto" unmountOnExit>
                      {Sub.Content.map((items) => (
                        <ListItemButton key={`${index + 0}`}>
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
