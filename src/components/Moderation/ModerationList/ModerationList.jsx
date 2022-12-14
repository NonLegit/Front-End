/* eslint-disable react/no-array-index-key */
import {
  List, ListItemButton, ListItemText, ListItemIcon,
  Collapse,
} from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import ExpandMore from '@mui/icons-material/ExpandMore';
import * as React from 'react';
import BackupTableOutlinedIcon from '@mui/icons-material/BackupTableOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutline';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import StyledList, { HeaderText, HeaderLink, HeaderSubpage } from './styles';

function ModerationList() {
  const { subReddit, subTitle } = useParams();

  const [openModList, setOpenModList] = React.useState(0);
  const handleClickModList = () => {
    setOpenModList(!openModList);
  };
  const navigate = useNavigate();

  // navigate
  const handleClick = (subPage) => {
    navigate(`${subPage}`);
  };

  return (
    <StyledList>
      <ListItemButton disableTouchRipple onClick={handleClickModList}>
        {/* <ListItemText primary="Mod" sx={{ color: 'black', paddingLeft: '5px' }} /> */}
        <HeaderText>
          <HeaderLink href="/" underline="none">
            r/
            {subReddit}
          </HeaderLink>
          <HeaderSubpage>
          &nbsp;/&nbsp;
            {subTitle}
          </HeaderSubpage>
        </HeaderText>
        <ExpandMore sx={{ color: '#757575', fontSize: 20 }} />
      </ListItemButton>
      <Collapse
        in={Boolean(openModList)}
        sx={{
          position: 'absolute', width: '270px', left: '-50px', top: '45px',
        }}
        timeout="auto"
        unmountOnExit
      >
        <List component="div" disablePadding>
          <ListItemButton disabled>
            <ListItemIcon><BackupTableOutlinedIcon /></ListItemIcon>
            <ListItemText primary="QUEUES" sx={{ color: 'black', paddingLeft: '5px' }} />
          </ListItemButton>
          {['Spam', 'Edited', 'Unmoderated'].map((items, index) => (
            <ListItemButton key={`${index + 0}`} onClick={() => { handleClick(`${items}`); }}>
              <ListItemText primary={items} />
            </ListItemButton>
          ))}
          <ListItemButton disabled>
            <ListItemIcon><PersonOutlineOutlinedIcon /></ListItemIcon>
            <ListItemText primary="USER MANAGEMENT" sx={{ color: 'black', paddingLeft: '5px' }} />
          </ListItemButton>
          {['Banned', 'Muted', 'Approved', 'Moderators'].map((items, index) => (
            <ListItemButton key={`${index + 0}`} onClick={() => { handleClick(`${items}`); }}>
              <ListItemText primary={items} />
            </ListItemButton>
          ))}
          <ListItemButton disabled>
            <ListItemIcon><SellOutlinedIcon /></ListItemIcon>
            <ListItemText primary="FLAIR & EMOJIES" sx={{ color: 'black', paddingLeft: '5px' }} />
          </ListItemButton>
          {['Post flair'].map((items, index) => (
            <ListItemButton key={`${index + 0}`} onClick={() => { handleClick(`${items}`); }}>
              <ListItemText primary={items} />
            </ListItemButton>
          ))}
          <ListItemButton disabled>
            <ListItemIcon><ArticleOutlinedIcon /></ListItemIcon>
            <ListItemText primary="RULES AND REGULATIONS" sx={{ color: 'black', paddingLeft: '5px' }} />
          </ListItemButton>
          {['Rules', 'Removal reasons', 'Content controls'].map((items, index) => (
            <ListItemButton key={`${index + 0}`} onClick={() => { handleClick(`${items}`); }}>
              <ListItemText primary={items} />
            </ListItemButton>
          ))}
          <ListItemButton disabled>
            <ListItemIcon><FormatListBulletedOutlinedIcon /></ListItemIcon>
            <ListItemText primary="CONTENT" sx={{ color: 'black', paddingLeft: '5px' }} />
          </ListItemButton>
          {['Scheduled posts'].map((items, index) => (
            <ListItemButton key={`${index + 0}`} onClick={() => { handleClick(`${items}`); }}>
              <ListItemText primary={items} />
            </ListItemButton>
          ))}
          <ListItemButton disabled>
            <ListItemIcon><SettingsOutlinedIcon /></ListItemIcon>
            <ListItemText primary="OTHER" sx={{ color: 'black', paddingLeft: '5px' }} />
          </ListItemButton>
          {['Comunity settings', 'Comunity apperance'].map((items, index) => (
            <ListItemButton key={`${index + 0}`} onClick={() => { handleClick(`${items}`); }}>
              <ListItemText primary={items} />
            </ListItemButton>
          ))}
          <ListItemButton disabled>
            <ListItemIcon><SignalCellularAltOutlinedIcon /></ListItemIcon>
            <ListItemText primary="COMMUNITY ACTIVITY" sx={{ color: 'black', paddingLeft: '5px' }} />
          </ListItemButton>
          {['Traffic stats'].map((items, index) => (
            <ListItemButton key={`${index + 0}`} onClick={() => { handleClick(`${items}`); }}>
              <ListItemText primary={items} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </StyledList>
  );
}

export default ModerationList;
