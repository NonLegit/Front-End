import { Box } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useState } from 'react';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import {
  Select, SelectBox, SelectItem,
} from './style';
/**
 * More icon
 * @return {React.Component} - More icon
 */
export default function Sort(props) {
  const { margin } = props;
  const { marginLeft } = props;
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
          <Box data-testid="sort" sx={{ display: 'flex' }} onClick={() => { handleClick1(); }}>
            <MoreHorizIcon />
          </Box>
        </ClickAwayListener>
      </Select>
      {showList1 && (
      <SelectBox data-testid="items" sx={{ marginTop: margin, marginLeft }}>
        <SelectItem>Add to Custom Feed</SelectItem>
        <SelectItem>Add to Favorites</SelectItem>
      </SelectBox>
      )}
    </>

  );
}