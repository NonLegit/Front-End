import { Box } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useState } from 'react';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import {
  Select, SelectBox, SelectItem,
} from './style';

export default function Sort() {
  const [showList1, setShowList1] = useState(false);

  // handle disable the list when click away
  const handleClick1 = () => {
    setShowList1((prev) => !prev);
  };

  const handleClickAway1 = () => {
    setShowList1(false);
  };

  return (
    <>
      <Select>
        <ClickAwayListener onClickAway={handleClickAway1}>
          <Box sx={{ display: 'flex' }} onClick={() => { handleClick1(); }}>
            <MoreHorizIcon />
          </Box>
        </ClickAwayListener>
      </Select>
      {showList1 && (
      <SelectBox>
        <SelectItem>Add to Custom Feed</SelectItem>
        <SelectItem>Add to Favorites</SelectItem>
      </SelectBox>
      )}
    </>

  );
}
