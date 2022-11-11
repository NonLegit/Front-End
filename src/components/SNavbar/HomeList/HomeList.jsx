/* eslint-disable react/no-array-index-key */
import HomeIcon from '@mui/icons-material/Home';
import {
  List, ListItemButton, ListItemIcon, ListItemText,
  Collapse, ListSubheader,
} from '@mui/material';
import ExpandMore from '@mui/icons-material/ExpandMore';
import * as React from 'react';
import ExpandLess from '@mui/icons-material/ExpandLess';
import StyledList from './styles';
import { firstList, exploreList } from '../Drawer/Lists';

/**
 * Home List
 * @component
 * @returns {React.Component} the left list in the navbar in signed out mode.
 */
function HomeList() {
  const [openHomeList, setOpenHomeList] = React.useState(0);
  const handleClickHomeList = () => {
    setOpenHomeList(!openHomeList);
  };

  const [openSubList, setOpenSubList] = React.useState([0, 0, 0, 0, 0, 0, 0]);
  const handleClickSubList = (index) => {
    const arr = [0, 0, 0, 0, 0, 0, 0];
    arr[index] = (openSubList[index] === 1) ? 0 : 1;
    setOpenSubList(arr);
  };

  return (
    <StyledList>
      <ListItemButton onClick={handleClickHomeList}>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" sx={{ color: 'black', paddingLeft: '5px' }} />
        <ExpandMore sx={{ color: '#757575', fontSize: 20 }} />
      </ListItemButton>
      <Collapse
        in={Boolean(openHomeList)}
        sx={{
          position: 'absolute', width: '270px', left: '0px', top: '55px',
        }}
        timeout="auto"
        unmountOnExit
      >
        <List component="div" disablePadding subheader={<ListSubheader>feeds</ListSubheader>}>
          {firstList.map((items, index) => (
            <ListItemButton key={`${index + 0}`}>
              <ListItemIcon>
                {items.icon}
              </ListItemIcon>
              <ListItemText primary={items.label} />
            </ListItemButton>
          ))}
        </List>
        <List component="div" disablePadding subheader={<ListSubheader>others</ListSubheader>}>
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
                    <ListItemText primary={items} />
                  </ListItemButton>
                ))}
              </Collapse>
            </>
          ))
          }
        </List>
      </Collapse>
    </StyledList>
  );
}

export default HomeList;
