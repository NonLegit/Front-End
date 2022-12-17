import * as React from 'react';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import {
  Box,
} from '@mui/material';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
  ShowMoreList, ShowMoreListItemText, ListItemButton, Fab,
} from './style';

export default function TimeType() {
  const [Time, setTime] = React.useState(false);

  const [searchParams] = useSearchParams();
  const sort = searchParams.get('sort') || 'Relevance';
  const type = searchParams.get('type') || 'Posts';

  const t = searchParams.get('t') || 'All Time';
  const navigate = useNavigate();

  // navigate
  const handleClick = (subPage) => {
    navigate(`?type=${type}&sort=${sort}&t=${subPage}`);
  };

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
          {t}
          {!Time && (
          <ExpandMoreIcon
            sx={{
              borderRadius: '10%',
            }}
          >
            <MoreHorizOutlinedIcon />
          </ExpandMoreIcon>
          )}
          {Time && (
          <ExpandLessIcon
            sx={{
              borderRadius: '10%',
            }}
            onClick={showTime}
          >
            {t}
            <MoreHorizOutlinedIcon />
          </ExpandLessIcon>
          )}
        </Fab>
      </ClickAwayListener>

      <ShowMoreList display={(Time === false ? 'none' : 'block')}>
        <ListItemButton onClick={() => { setTime(!Time); handleClick('All Time'); }}>
          <ShowMoreListItemText Condition={(t === 'All Time' || t === 'Time').toString()}>
            All Time
          </ShowMoreListItemText>
        </ListItemButton>
        <ListItemButton onClick={() => { setTime(!Time); handleClick('Past Year'); }}>
          <ShowMoreListItemText Condition={(t === 'Past Year').toString()}>
            Past Year
          </ShowMoreListItemText>
        </ListItemButton>
        <ListItemButton onClick={() => { setTime(!Time); handleClick('Past Month'); }}>
          <ShowMoreListItemText Condition={(t === 'Past Month').toString()}>
            Past Month
          </ShowMoreListItemText>
        </ListItemButton>
        <ListItemButton onClick={() => { setTime(!Time); handleClick('Past Week'); }}>
          <ShowMoreListItemText Condition={(t === 'Past Week').toString()}>
            Past Week
          </ShowMoreListItemText>
        </ListItemButton>
        <ListItemButton onClick={() => { setTime(!Time); handleClick('Past 24 Hours'); }}>
          <ShowMoreListItemText Condition={(t === 'Past 24 Hours').toString()}>
            Past 24 Hours
          </ShowMoreListItemText>
        </ListItemButton>
        <ListItemButton onClick={() => { setTime(!Time); handleClick('Past Hour'); }}>
          <ShowMoreListItemText Condition={(t === 'Past Hour').toString()}>
            Past Hour
          </ShowMoreListItemText>
        </ListItemButton>
      </ShowMoreList>
    </Box>
  );
}
