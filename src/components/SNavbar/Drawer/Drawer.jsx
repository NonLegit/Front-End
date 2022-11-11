/* eslint-disable react/no-array-index-key */
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ExpandLess from '@mui/icons-material/ExpandLess';
import {
  ListSubheader, ListItemIcon, ListItemText, ListItemButton, ListItem, List, Collapse,
} from '@mui/material';
import * as React from 'react';
import { firstList, exploreList } from './Lists';
import StyledDrawer from './styles';

/**
 * Drawer
 * @component
 * @returns {React.Component} the side bar that permenantely appears on the left on the page
 *  in case of signed out
 */
export default function Drawer() {
  const [openSubList, setOpenSubList] = React.useState([0, 0, 0, 0, 0, 0, 0]);
  const handleClickSubList = (index) => {
    const arr = [0, 0, 0, 0, 0, 0, 0];
    arr[index] = (openSubList[index] === 1) ? 0 : 1;
    setOpenSubList(arr);
  };
  return (
    <StyledDrawer variant="permanent">
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List subheader={<ListSubheader>FEEDS</ListSubheader>}>
          {firstList.map((items, index) => (
            <ListItem disablePadding key={index}>
              <ListItemButton>
                <ListItemIcon>
                  {items.icon}
                </ListItemIcon>
                <ListItemText primary={items.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List subheader={<ListSubheader>TOPICS</ListSubheader>}>
          {
          exploreList.map((Sub, index) => (
            <>
              <ListItemButton key={`${index + 0}`} onClick={() => { handleClickSubList(index); }}>
                <ListItemIcon>
                  {Sub.icon}
                </ListItemIcon>
                <ListItemText primary={Sub.SubList} />
                {openSubList[index] ? <ExpandLess sx={{ color: '#000000', fontSize: 20 }} /> : <ExpandMore sx={{ color: '#000000', fontSize: 20 }} />}
              </ListItemButton>
              <Collapse in={Boolean(openSubList[index])} timeout="auto" unmountOnExit>
                {Sub.Content.map((items) => (
                  <ListItemButton key={`${index + 0}`}>
                    <ListItemText inset primary={items} />
                  </ListItemButton>
                ))}
              </Collapse>
            </>
          ))
          }
        </List>
      </Box>
    </StyledDrawer>
  );
}
