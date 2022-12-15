import * as React from 'react';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ClickAwayListener from '@mui/material/ClickAwayListener';

import {
  Box,
} from '@mui/material';
import { useEffect } from 'react';
import {
  ShowMoreList, ShowMoreListItemText, ListItemButton, Fab,
} from './styles';

function SortComments(props) {
  const { sortName, setSortName } = props;
  const [Sort, setSort] = React.useState(false);

  useEffect(() => {
    console.log('FROMMMM', sortName);
  }, []);

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
          Sort By:
          {' '}
          {sortName}
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
            {sortName}
            <MoreHorizOutlinedIcon />
          </ExpandLessIcon>
          )}
        </Fab>
      </ClickAwayListener>
      <ShowMoreList display={(Sort === false ? 'none' : 'block')}>
        {/* <ListItemButton sx={{ Dispaly: 'none' }} onClick={() => { setSortName('sort'); setSort(!Sort); }}>
          <ShowMoreListItemText Condition={(SortName === 'sort').toString()}>
            Sort
          </ShowMoreListItemText>
        </ListItemButton> */}

        <ListItemButton onClick={() => { setSortName('Top'); setSort(!Sort); }}>
          <ShowMoreListItemText Condition={(sortName === 'Top').toString()}>
            Top
          </ShowMoreListItemText>
        </ListItemButton>

        <ListItemButton onClick={() => { setSortName('New'); setSort(!Sort); }}>
          <ShowMoreListItemText Condition={(sortName === 'New').toString()}>
            New
          </ShowMoreListItemText>
        </ListItemButton>

        <ListItemButton onClick={() => { setSortName('Best'); setSort(!Sort); }}>
          <ShowMoreListItemText Condition={(sortName === 'Best').toString()}>
            Best
          </ShowMoreListItemText>
        </ListItemButton>

        <ListItemButton onClick={() => { setSortName('Old'); setSort(!Sort); }}>
          <ShowMoreListItemText Condition={(sortName === 'Old').toString()}>
            Old
          </ShowMoreListItemText>
        </ListItemButton>
      </ShowMoreList>
    </Box>

  );
}

export default SortComments;
