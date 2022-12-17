import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import CropSquareOutlinedIcon from '@mui/icons-material/CropSquareOutlined';
import {
  Box, Divider, IconButton,
} from '@mui/material';
import { useState } from 'react';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { FilterBox, FilterText } from './styles';
import { SelectBox, SelectItem } from '../../styles';

function Filter(props) {
  const { numItems, dot, selected } = props;
  const [showList, setShowList] = useState(false);

  // handle disable the list when click away
  const handleClick = () => {
    setShowList((prev) => !prev);
  };

  const handleClickAway = () => {
    setShowList(false);
  };
  return (
    <>
      <FilterBox>
        <ClickAwayListener onClickAway={handleClickAway}>
          <Box sx={{ display: 'flex' }}>
            <IconButton sx={{ padding: 0 }}><CropSquareOutlinedIcon color="action" /></IconButton>
            <IconButton sx={{ padding: 0 }}><KeyboardArrowDownOutlinedIcon color="action" onClick={() => { handleClick(); }} /></IconButton>
            <Divider orientation="vertical" flexItem />
          </Box>
        </ClickAwayListener>
        <Box sx={{ display: 'flex' }}>
          <FilterText variant="caption">{numItems}</FilterText>
          <FilterText variant="caption">{dot}</FilterText>
          <FilterText variant="caption">{selected}</FilterText>
        </Box>
      </FilterBox>

      {showList && (
      <SelectBox>
        {['Spam Filtered', 'Has Reports', 'Self Posts', 'Posts With Flair', 'Posts', 'Comments'].map((text) => (
          <Box key={text}>
            <SelectItem>{text}</SelectItem>
            <Divider />
          </Box>
        ))}
        <SelectItem>Chat Posts</SelectItem>
      </SelectBox>
      )}

    </>
  );
}

export default Filter;
