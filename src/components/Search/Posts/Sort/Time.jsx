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

/**
 * Search by posts time type
 * @component
 * @property  {function} handleClick  navigate and change sort type
 * @property  {function} showTime show and hide the time list
 * @property  {function} handleClickAway close list when click out

 * @return {React.Component} - Search by posts time type
 */

export default function TimeType() {
  const [Time, setTime] = React.useState(false);

  const [searchParams] = useSearchParams();
  const sort = searchParams.get('sort') || 'new';
  const type = searchParams.get('type') || 'posts';

  const t = searchParams.get('t') || 'day';
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
        <ListItemButton onClick={() => { setTime(!Time); handleClick('all'); }}>
          <ShowMoreListItemText Condition={(t === 'all').toString()}>
            All Time
          </ShowMoreListItemText>
        </ListItemButton>
        <ListItemButton onClick={() => { setTime(!Time); handleClick('year'); }}>
          <ShowMoreListItemText Condition={(t === 'year').toString()}>
            Past Year
          </ShowMoreListItemText>
        </ListItemButton>
        <ListItemButton onClick={() => { setTime(!Time); handleClick('month'); }}>
          <ShowMoreListItemText Condition={(t === 'month').toString()}>
            Past Month
          </ShowMoreListItemText>
        </ListItemButton>
        <ListItemButton onClick={() => { setTime(!Time); handleClick('week'); }}>
          <ShowMoreListItemText Condition={(t === 'week').toString()}>
            Past Week
          </ShowMoreListItemText>
        </ListItemButton>
        <ListItemButton onClick={() => { setTime(!Time); handleClick('day'); }}>
          <ShowMoreListItemText Condition={(t === 'day' || t === 'Time').toString()}>
            Past 24 Hours
          </ShowMoreListItemText>
        </ListItemButton>
        <ListItemButton onClick={() => { setTime(!Time); handleClick('hour'); }}>
          <ShowMoreListItemText Condition={(t === 'hour').toString()}>
            Past Hour
          </ShowMoreListItemText>
        </ListItemButton>
      </ShowMoreList>
    </Box>
  );
}
