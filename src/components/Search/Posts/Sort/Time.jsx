import * as React from 'react';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import {
  Box, Divider,
} from '@mui/material';
import {
  ShowMoreList, ShowMoreListItemText, ListItemButton, Fab,
} from './style';

export default function TimeType() {
  const [Time, setTime] = React.useState(false);
  const [TimeName, setTimeName] = React.useState('Time');

  // show and hide the time list
  const showTime = () => {
    setTime(!Time);
  };
  // close list when click out
  const handleClickAway = () => {
    setTime(false);
  };
  return (
    <Box position="relative" display="flex">
      <ClickAwayListener onClickAway={handleClickAway}>
        <Fab
          variant="extended"
          size="small"
          onClick={showTime}
        >
          {TimeName}
          {!Time && (
          <ExpandMoreIcon
            sx={{
              borderRadius: '10%',
              py: 0.4,
            }}
          >
            <MoreHorizOutlinedIcon />
          </ExpandMoreIcon>
          )}
          {Time && (
          <ExpandLessIcon
            sx={{
              borderRadius: '10%',
              py: 0.4,
            }}
            onClick={showTime}
          >
            {TimeName}
            <MoreHorizOutlinedIcon />
          </ExpandLessIcon>
          )}
        </Fab>
      </ClickAwayListener>

      <ShowMoreList display={(Time === false ? 'none' : 'block')}>
        <ListItemButton onClick={() => { setTimeName('All Time'); setTime(!Time); }}>
          <ShowMoreListItemText Condition={(TimeName === 'All Time' || TimeName === 'Time').toString()}>
            All Time
          </ShowMoreListItemText>
        </ListItemButton>
        <Divider />
        <ListItemButton onClick={() => { setTimeName('Past Year'); setTime(!Time); }}>
          <ShowMoreListItemText Condition={(TimeName === 'Past Year').toString()}>
            Past Year
          </ShowMoreListItemText>
        </ListItemButton>
        <Divider />
        <ListItemButton onClick={() => { setTimeName('Past Month'); setTime(!Time); }}>
          <ShowMoreListItemText Condition={(TimeName === 'Past Month').toString()}>
            Past Month
          </ShowMoreListItemText>
        </ListItemButton>
        <Divider />
        <ListItemButton onClick={() => { setTimeName('Past Week'); setTime(!Time); }}>
          <ShowMoreListItemText Condition={(TimeName === 'Past Week').toString()}>
            Past Week
          </ShowMoreListItemText>
        </ListItemButton>
        <Divider />
        <ListItemButton onClick={() => { setTimeName('Past 24 Hours'); setTime(!Time); }}>
          <ShowMoreListItemText Condition={(TimeName === 'Past 24 Hours').toString()}>
            Past 24 Hours
          </ShowMoreListItemText>
        </ListItemButton>
        <Divider />
        <ListItemButton onClick={() => { setTimeName('Past Hour'); setTime(!Time); }}>
          <ShowMoreListItemText Condition={(TimeName === 'Past Hour').toString()}>
            Past Hour
          </ShowMoreListItemText>
        </ListItemButton>
      </ShowMoreList>
    </Box>
  );
}
