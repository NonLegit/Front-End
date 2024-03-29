/* eslint-disable react/no-array-index-key */
import HomeIcon from '@mui/icons-material/Home';
import ContactlessOutlinedIcon from '@mui/icons-material/ContactlessOutlined';
import {
  List, ListItemButton, ListItemIcon, ListItemText,
  Collapse, ListSubheader, ClickAwayListener,
} from '@mui/material';
import ExpandMore from '@mui/icons-material/ExpandMore';
import * as React from 'react';
import OutboundOutlinedIcon from '@mui/icons-material/OutboundOutlined';
import Avatar from '@mui/material/Avatar';
import AddIcon from '@mui/icons-material/Add';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Link } from 'react-router-dom';
import StyledList from './styles';
import Reddit from '../assests/Reddit.svg';
import FormDialog from '../../../HomePage/HomePageContainer/PersonalReddit/PopUpSubReddit/PopUp';

/**
 *  HomeList
 * @component
 * @returns {React.Component} left list in navbar in logged in mode
 */
function HomeList() {
  const [openHomeList, setopenHomeList] = React.useState(0);
  const handleClickHomeList = () => {
    setopenHomeList(!openHomeList);
  };
  const feedsList = [
    { icon: <HomeIcon />, label: 'home' },
    { icon: <OutboundOutlinedIcon />, label: 'popular' },
    { icon: <ContactlessOutlinedIcon />, label: 'all' },
  ];
  const othersList = [
    { icon: <Avatar src={Reddit} />, label: 'user settings' },
    { icon: <Avatar src={Reddit} />, label: 'messages' },
    { icon: <AddIcon sx={{ fontSize: 30 }} />, label: 'create post' },
    { icon: <AddIcon sx={{ fontSize: 30 }} />, label: 'create subreddit' },
    { icon: <ContactlessOutlinedIcon />, label: 'top communities' },
    { icon: <NotificationsNoneIcon />, label: 'notifications' },
  ];
  return (
    <ClickAwayListener onClickAway={() => { setopenHomeList(false); }}>
      <StyledList>
        <ListItemButton onClick={handleClickHomeList}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" sx={{ color: 'black', paddingLeft: '5px' }} />
          <ExpandMore sx={{ color: '#757575', fontSize: 20 }} />
        </ListItemButton>
        <Collapse in={Boolean(openHomeList)} timeout="auto" unmountOnExit sx={{ position: 'absolute', width: '270px', left: '0px' }}>
          <List component="div" disablePadding subheader={<ListSubheader>feeds</ListSubheader>}>
            {feedsList.map((items, index) => (
              (items.label === 'home') ? (

                <ListItemButton key={`${index + 0}`}>
                  <Link to="/" style={{ textDecoration: 'none', display: 'flex' }}>
                    <ListItemIcon>
                      {items.icon}
                    </ListItemIcon>
                    <ListItemText primary={items.label} />
                  </Link>
                </ListItemButton>

              ) : (items.label === 'popular')
                ? (
                  <ListItemButton key={`${index + 0}`}>
                    <Link to="/r/popular" style={{ textDecoration: 'none', display: 'flex' }}>
                      <ListItemIcon>
                        {items.icon}
                      </ListItemIcon>
                      <ListItemText primary={items.label} />
                    </Link>
                  </ListItemButton>
                )
                : (
                  <ListItemButton key={`${index + 0}`}>
                    <Link to="/r/all" style={{ textDecoration: 'none', display: 'flex' }}>
                      <ListItemIcon>
                        {items.icon}
                      </ListItemIcon>
                      <ListItemText primary={items.label} />
                    </Link>
                  </ListItemButton>
                )
            ))}
          </List>
          <List component="div" disablePadding subheader={<ListSubheader>others</ListSubheader>}>
            {
            othersList.map((items, index) => (
              (items.label === 'create subreddit') ? (
                <div key={`${index + 0}`}>
                  <ListItemButton
                    onClick={() => {
                      const ele = document.getElementById('popup-form-button');
                      console.log(ele);
                      ele.click();
                    }}
                  >
                    <ListItemIcon>
                      {items.icon}
                    </ListItemIcon>
                    <ListItemText primary={items.label} />
                  </ListItemButton>
                  <FormDialog display="none" />
                </div>
              )
                : (items.label === 'create post')
                  ? (
                    <ListItemButton key={`${index + 0}`}>
                      <Link to="/submit" style={{ textDecoration: 'none', display: 'flex' }}>
                        <ListItemIcon>
                          {items.icon}
                        </ListItemIcon>
                        <ListItemText primary={items.label} />
                      </Link>
                    </ListItemButton>
                  )
                  : (items.label === 'notifications')
                    ? (
                      <ListItemButton key={`${index + 0}`}>
                        <Link to="/notifications" style={{ textDecoration: 'none', display: 'flex' }}>
                          <ListItemIcon>
                            {items.icon}
                          </ListItemIcon>
                          <ListItemText primary={items.label} />
                        </Link>
                      </ListItemButton>
                    )
                    : (items.label === 'top communities')
                      ? (
                        <ListItemButton key={`${index + 0}`}>
                          <Link to="/subreddits/leaderboard/" style={{ textDecoration: 'none', display: 'flex' }}>
                            <ListItemIcon>
                              {items.icon}
                            </ListItemIcon>
                            <ListItemText primary={items.label} />
                          </Link>
                        </ListItemButton>
                      )
                      : (items.label === 'user settings')
                        ? (
                          <ListItemButton key={`${index + 0}`}>
                            <Link to="/settings" style={{ textDecoration: 'none', display: 'flex' }}>
                              <ListItemIcon>
                                {items.icon}
                              </ListItemIcon>
                              <ListItemText primary={items.label} />
                            </Link>
                          </ListItemButton>
                        ) : (
                          <ListItemButton key={`${index + 0}`}>
                            <Link to="/messages" style={{ textDecoration: 'none', display: 'flex' }}>
                              <ListItemIcon>
                                {items.icon}
                              </ListItemIcon>
                              <ListItemText primary={items.label} />
                            </Link>
                          </ListItemButton>
                        )
            ))
            }
          </List>
        </Collapse>
      </StyledList>
    </ClickAwayListener>
  );
}

export default HomeList;
