import * as React from 'react';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ClickAwayListener from '@mui/material/ClickAwayListener';

import {
  Box,
} from '@mui/material';
import {
  ShowMoreList, ShowMoreListItemText, ListItemButton, Fab,
} from './styles';

function SortComments() {
  const [Sort, setSort] = React.useState(false);
  const [SortName, setSortName] = React.useState('Sort');

  // show and hide the sort list
  const showSort = () => {
    setSort(!Sort);
  };

  // close list when click out
  const handleClickAway = () => {
    setSort(false);
  };
  return (
    <Box position="relative" display="flex">
      <ClickAwayListener onClickAway={handleClickAway}>
        <Fab
          variant="extended"
          size="small"
          onClick={showSort}
        >
          {SortName}
          {!Sort && (
          <ExpandMoreIcon
            sx={{
              borderRadius: '10%',
              py: 0.4,
            }}
          >
            <MoreHorizOutlinedIcon />
          </ExpandMoreIcon>
          )}
          {Sort && (
          <ExpandLessIcon
            sx={{
              borderRadius: '10%',
              py: 0.4,
            }}
            onClick={showSort}
          >
            {SortName}
            <MoreHorizOutlinedIcon />
          </ExpandLessIcon>
          )}
        </Fab>
      </ClickAwayListener>
      <ShowMoreList display={(Sort === false ? 'none' : 'block')}>
        <ListItemButton onClick={() => { setSortName('Relevance'); setSort(!Sort); }}>
          <ShowMoreListItemText Condition={(SortName === 'Relevance' || SortName === 'Sort').toString()}>
            Relevance
          </ShowMoreListItemText>
        </ListItemButton>
        <ListItemButton onClick={() => { setSortName('Hot'); setSort(!Sort); }}>
          <ShowMoreListItemText Condition={(SortName === 'Hot').toString()}>
            Hot
          </ShowMoreListItemText>
        </ListItemButton>
        <ListItemButton onClick={() => { setSortName('Top'); setSort(!Sort); }}>
          <ShowMoreListItemText Condition={(SortName === 'Top').toString()}>
            Top
          </ShowMoreListItemText>
        </ListItemButton>
        <ListItemButton onClick={() => { setSortName('New'); setSort(!Sort); }}>
          <ShowMoreListItemText Condition={(SortName === 'New').toString()}>
            New
          </ShowMoreListItemText>
        </ListItemButton>
        <ListItemButton onClick={() => { setSortName('Most Comments'); setSort(!Sort); }}>
          <ShowMoreListItemText Condition={(SortName === 'Most Comments').toString()}>
            Most Comments
          </ShowMoreListItemText>
        </ListItemButton>
      </ShowMoreList>
    </Box>

  );
}

export default SortComments;
