/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/no-array-index-key */
import {
  List, ListItemButton, ListItemIcon, Collapse, Box, Typography, Divider, ListItemText, ClickAwayListener,
} from '@mui/material';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ExpandLess from '@mui/icons-material/ExpandLess';
import Avatar from '@mui/material/Avatar';
import * as React from 'react';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import FormDialog from '../../../HomePage/HomePageContainer/PersonalReddit/PopUpSubReddit/PopUp';
import {
  StyledList,
} from './styles';
import karma from '../assests/karma.png';
import { firstList, secondList, exploreList } from './Lists';
import { logOut } from './server';
/**
 * UserList
 * @component
 * @returns {React.Component} the User list which is the right lish in logged in navbar.
 */

function UserList() {
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie, removeCookie] = useCookies(['redditUser']);
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
    <ClickAwayListener onClickAway={() => { setOpenUserList(false); }}>
      <StyledList>

        <ListItemButton onClick={handleClickUserList}>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <ListItemIcon>
              <Box>
                <Avatar src={cookies.redditUser?.profilePicture} />
              </Box>
            </ListItemIcon>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: 'column', paddingRight: '60px' }}>
              <Typography sx={{ fontSize: '12px', color: '#1C1C1C' }}>{cookies.redditUser?.userName}</Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img alt="" src={karma} width={12} height={12} />
                <Typography sx={{ fontSize: '12px', color: '#A8AAAB', whiteSpace: 'nowrap' }}>
                  { cookies.redditUser?.postKarma + cookies.redditUser?.commentKarma }
                  {' '}
                  karma
                </Typography>
              </Box>
            </Box>
          </Box>
          <ExpandMore sx={{ color: '#757575', fontSize: 20 }} />
        </ListItemButton>

        <Collapse in={Boolean(openUserList)} timeout="auto" unmountOnExit>
          <List component="div" disablePadding sx={{ position: 'absolute', width: '100%' }}>
            <ListItemButton>
              <ListItemIcon sx={{ display: 'contents' }}>
                <AccountCircleOutlinedIcon sx={{ color: '#787C7E' }} />
              </ListItemIcon>
              <ListItemText primary="my stuff" />
            </ListItemButton>
            {
            firstList.map((items, index) => (
              <ListItemButton key={`${index + 0}`}>
                { (items === 'profile')
                  ? (
                    <Link to={`/user/${cookies.redditUser?.userName}`} style={{ textDecoration: 'none', display: 'flex', width: '100%' }}>
                      <ListItemText primary={items} />
                    </Link>
                  )
                  : (items === 'user settings')
                    ? (
                      <Link to="/settings" style={{ textDecoration: 'none', display: 'flex', width: '100%' }}>
                        <ListItemText primary={items} />
                      </Link>
                    )
                    : (
                      <ListItemText primary={items} />

                    )}
              </ListItemButton>
            ))
          }
            <Divider sx={{ borderColor: '#cacbcd' }} />
            { secondList.map((items, index) => (
              (items.label === 'create a community')
                ? (
                  <div key={`${index + 0}`}>
                    <ListItemButton
                      onClick={() => {
                        const ele = document.getElementById('popup-form-button');
                        console.log(ele);
                        ele.click();
                      }}
                    >
                      <ListItemIcon sx={{ display: 'contents' }}>
                        {items.icon}
                      </ListItemIcon>
                      <ListItemText primary={items.label} />
                    </ListItemButton>

                    <FormDialog display="none" />
                  </div>
                ) : (
                  <ListItemButton key={`${index + 0}`}>
                    <ListItemIcon sx={{ display: 'contents' }}>
                      {items.icon}
                    </ListItemIcon>
                    <ListItemText primary={items.label} />
                  </ListItemButton>
                )
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
                  <div key={`${index + 0}`}>
                    <ListItemButton onClick={() => { handleClickSubList(index); }}>
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
                  </div>
                ))
              }
            </Collapse>
            <Divider sx={{ borderColor: '#cacbcd' }} />
            <ListItemButton onClick={() => { console.log('clicked'); logOut(removeCookie); }}>
              <ListItemIcon sx={{ display: 'contents' }}>
                <LoginOutlinedIcon sx={{ color: 'black', fontSize: 25 }} />
              </ListItemIcon>
              <ListItemText primary="log out" />
            </ListItemButton>
          </List>
        </Collapse>

      </StyledList>
    </ClickAwayListener>
  );
}

export default UserList;
