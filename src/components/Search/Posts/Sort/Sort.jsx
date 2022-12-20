import * as React from 'react';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ClickAwayListener from '@mui/material/ClickAwayListener';

import { useNavigate, useSearchParams } from 'react-router-dom';

import {
  Box,
} from '@mui/material';
import {
  ShowMoreList, ShowMoreListItemText, ListItemButton, Fab,
} from './style';

/**
 * Search by posts sort type
 * @component
 * @property  {function} handleClick  navigate and change sort type
 * @property  {function} showSort show and hide the sort list
 * @property  {function} handleClickAway close list when click out

 * @return {React.Component} - Search by posts sort type
 */
export default function SortType() {
  const [Openort, setOpenSort] = React.useState(false);

  const [searchParams] = useSearchParams();
  const type = searchParams.get('type') || 'posts';

  const Sort = searchParams.get('sort') || 'new';
  const navigate = useNavigate();

  // navigate
  const handleClick = (subPage) => {
    navigate(`?type=${type}&sort=${subPage}`);
  };

  // show and hide the sort list
  const showSort = () => {
    setOpenSort(!Openort);
  };

  // close list when click out
  const handleClickAway = () => {
    setOpenSort(false);
  };
  return (
    <Box position="relative" display="flex">
      <ClickAwayListener onClickAway={handleClickAway}>
        <Fab
          variant="extended"
          size="small"
          onClick={showSort}
        >
          {Sort}
          {!Openort && (
          <ExpandMoreIcon
            sx={{
              borderRadius: '10%',
              py: 0.4,
            }}
          >
            <MoreHorizOutlinedIcon />
          </ExpandMoreIcon>
          )}
          {Openort && (
          <ExpandLessIcon
            sx={{
              borderRadius: '10%',
              py: 0.4,
            }}
            onClick={showSort}
          >
            {Sort}
            <MoreHorizOutlinedIcon />
          </ExpandLessIcon>
          )}
        </Fab>
      </ClickAwayListener>
      <ShowMoreList display={(Openort === false ? 'none' : 'block')}>
        {/* <ListItemButton onClick={() => { setOpenSort(!Openort); handleClick('Relevance'); }}>
          <ShowMoreListItemText Condition={(Sort.toString() === 'Relevance' || Sort === 'Sort').toString()}>
            Relevance
          </ShowMoreListItemText>
        </ListItemButton> */}
        <ListItemButton onClick={() => { setOpenSort(!Openort); handleClick('hot'); }}>
          <ShowMoreListItemText Condition={(Sort.toString() === 'hot' || Sort === 'Sort').toString()}>
            Hot
          </ShowMoreListItemText>
        </ListItemButton>
        <ListItemButton onClick={() => { setOpenSort(!Openort); handleClick('top'); }}>
          <ShowMoreListItemText Condition={(Sort.toString() === 'top').toString()}>
            Top
          </ShowMoreListItemText>
        </ListItemButton>
        <ListItemButton onClick={() => { setOpenSort(!Openort); handleClick('new'); }}>
          <ShowMoreListItemText Condition={(Sort.toString() === 'new').toString()}>
            New
          </ShowMoreListItemText>
        </ListItemButton>
        <ListItemButton onClick={() => { setOpenSort(!Openort); handleClick('comments'); }}>
          <ShowMoreListItemText Condition={(Sort.toString() === 'comments').toString()}>
            Most Comments
          </ShowMoreListItemText>
        </ListItemButton>
      </ShowMoreList>
    </Box>
  );
}
