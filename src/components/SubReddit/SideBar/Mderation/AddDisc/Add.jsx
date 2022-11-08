import { Box, ClickAwayListener } from '@mui/material';
import { useState } from 'react';
import {
  AboutContent, Action, Add, Count, Input, InputFooter, Text,
} from './style';

function AddSector() {
  const [show, setShow] = useState(true);
  const [count, setCount] = useState(500);
  const handleClickAway1 = () => {
    setShow(true);
    setCount(500);
  };
  // ///////////////////////////////////
  const handleChange = (event) => {
    if (event.target.value.length < 501) {
      // setData(event.target.value);
      setCount(500 - event.target.value.length);
    }
  };
  return (
    <AboutContent>
      <ClickAwayListener onClickAway={handleClickAway1}>
        <Add>
          <Box onClick={() => { setShow(false); setCount(500); }}>
            {show && <Text> Add description</Text>}
          </Box>
          {!show
            && (
              <>
                <Input
                  type="text"
                  placeholder="Tell us About your community"
                  onChange={handleChange}
                  onInput={(e) => {
                  // eslint-disable-next-line radix
                    e.target.value = e.target.value.slice(0, 500);
                    e.target.style.height = `${e.target.scrollHeight}px`;
                  }}
                />
                <InputFooter>
                  <Count
                    Condition={(count === 0).toString()}
                  >
                    {count}
                    {' '}
                    Characters remaining
                  </Count>

                  <Box sx={{ display: 'flex' }}>
                    <Action onClick={() => { setShow(true); setCount(500); }} color="#0079d3" sx={{ marginRight: '8px' }}>Cancel</Action>
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
export default AddSector;
