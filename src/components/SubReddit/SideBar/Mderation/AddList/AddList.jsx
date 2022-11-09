import { Box, ClickAwayListener } from '@mui/material';
import { useState } from 'react';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import {
  AboutContent, Action, Add, BOX, Count, Input, InputFooter, Text,
} from './style';

function AddList() {
  const [show, setShow] = useState(true);
  const [count, setCount] = useState(0);
  const handleClickAway1 = () => {
    setShow(true);
    setCount(0);
  };
  // ///////////////////////////////////
  const handleChange = (event) => {
    console.log((event.target > 'Text').length);
    if (event.target.value.length < 26) {
      // setData(event.target.value);
      setCount((event.target > 'Text').length);
    }
  };
  return (
    <AboutContent>
      <ClickAwayListener onClickAway={handleClickAway1}>
        <Add>
          <BOX condition={show.toString()} onClick={() => { setShow(false); }}>
            <Text>
              {' '}
              Travel
              {' '}
              <ClearOutlinedIcon fontSize="small" onClick={(e) => e.target.parentElement.remove()} sx={{ color: 'gray' }} />
            </Text>
            {show
           && <ModeEditOutlineOutlinedIcon />}
          </BOX>
          {!show
            && (
              <>
                <Input
                  type="text"
                  onChange={handleChange}
                  onInput={(e) => {
                  // eslint-disable-next-line radix
                    e.target.style.height = `${e.target.scrollHeight}px`;
                  }}
                />
                <InputFooter>
                  <Count
                    condition={(count === 25).toString()}
                  >
                    {count}
                    /
                    25
                  </Count>
                  <Box sx={{ display: 'flex', marginTop: '1px' }}>
                    <Action onClick={() => { setShow(true); }} color="#0079d3" sx={{ marginRight: '8px' }}>Cancel</Action>
                    <Action color="red">Save</Action>
                  </Box>
                </InputFooter>
              </>
            )}
        </Add>
      </ClickAwayListener>
    </AboutContent>
  );
}
export default AddList;
