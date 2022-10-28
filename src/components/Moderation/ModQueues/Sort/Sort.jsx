import { Box } from '@mui/material';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { useState } from 'react';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import {
  Select,
  SelectText,
} from './styles';
import { SelectBox, SelectItem } from '../../styles';

function Sort() {
  const [showList1, setShowList1] = useState(false);
  const [showList2, setShowList2] = useState(false);

  // handle disable the list when click away
  const handleClick1 = () => {
    setShowList1((prev) => !prev);
  };

  const handleClickAway1 = () => {
    setShowList1(false);
  };

  // handle disable the list when click away
  const handleClick2 = () => {
    setShowList2((prev) => !prev);
  };

  const handleClickAway2 = () => {
    setShowList2(false);
  };

  return (
    <>
      <Select>
        <ClickAwayListener onClickAway={handleClickAway1}>
          <Box sx={{ marginRight: 2, display: 'flex' }} onClick={() => { handleClick1(); }}>
            <SelectText variant="caption" align="center">NEWEST FIRST</SelectText>
            <KeyboardArrowDownOutlinedIcon />
          </Box>
        </ClickAwayListener>
        <ClickAwayListener onClickAway={handleClickAway2}>
          <Box sx={{ display: 'flex' }} onClick={() => { handleClick2(); }}>
            <SelectText variant="caption" align="center">POSTS AND COMMENTS</SelectText>
            <KeyboardArrowDownOutlinedIcon />

          </Box>
        </ClickAwayListener>
      </Select>
      {showList1 && (
      <SelectBox>
        <SelectItem>Newest First</SelectItem>
        <SelectItem>Oldest First</SelectItem>
        <SelectItem>Most Reported First</SelectItem>
      </SelectBox>
      )}
      {showList2 && (
      <SelectBox sx={{ marginLeft: 15 }}>
        <SelectItem>Posts And Comments</SelectItem>
        <SelectItem>Posts</SelectItem>
        <SelectItem>Comments</SelectItem>
        <SelectItem>Live Chat Messages</SelectItem>
      </SelectBox>
      )}

    </>

  );
}

export default Sort;
