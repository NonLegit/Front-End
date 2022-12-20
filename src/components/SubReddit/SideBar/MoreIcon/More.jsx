import { Box } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useState } from 'react';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import {
  Select, SelectBox, SelectItem,
} from './style';
/**
 * More icon
 * @component
 * @property  {function} handleClick1 toggle showList or not
 * @property  {function} handleClickAway1 handle disable the list when click away
 * @property  {function} changeFavourit toggle favourit community

 * @return {React.Component} - More icon
 */
export default function Sort(props) {
  const { margin } = props;
  const { marginLeft } = props;
  const [showList1, setShowList1] = useState(false);
  const [favourit, setFavourit] = useState('Add to Favorites');

  // toggle the list when click
  const handleClick1 = () => {
    setShowList1((prev) => !prev);
  };

  // handle disable the list when click away
  const handleClickAway1 = () => {
    setShowList1(false);
  };
  const changeFavourit = () => {
    if (favourit === 'Add to Favorites') {
      setFavourit('Remove From Favorites');
    } else {
      setFavourit('Add to Favorites');
    }
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
        <SelectItem onClick={changeFavourit}>
          {favourit}
        </SelectItem>
      </SelectBox>
      )}
    </>

  );
}
