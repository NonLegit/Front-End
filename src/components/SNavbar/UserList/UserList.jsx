import React from 'react';
import {
  List, ListItemButton, ListItemIcon, ListItemText, Collapse,
} from '@mui/material';
import ExpandMore from '@mui/icons-material/ExpandMore';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StyledList from './styles';

/**
 * UserList
 * @component
 * @returns {React.Component} the User list which is the right lish in logged in navbar.
 */
function UserList({ logInPopup }) {
  const [openHomeList, setOpenHomeList] = React.useState(0);
  const handleClickHomeList = () => {
    setOpenHomeList(!openHomeList);
  };
  return (
    <StyledList>
      <ListItemButton onClick={handleClickHomeList} sx={{ display: 'flex' }}>
        <ListItemIcon sx={{ display: 'contents' }}>
          <PersonOutlineOutlinedIcon />
        </ListItemIcon>
        <ExpandMore sx={{ color: '#757575', fontSize: 20 }} />
      </ListItemButton>
      <Collapse in={Boolean(openHomeList)} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <HelpOutlineOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="help center" />
          </ListItemButton>
          <ListItemButton onClick={logInPopup}>
            <ListItemIcon>
              <LoginOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="log in / sign up" />
          </ListItemButton>
        </List>
      </Collapse>
    </StyledList>
  );
}

export default UserList;
