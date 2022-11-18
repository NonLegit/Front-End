import { Box, ClickAwayListener } from '@mui/material';
import { useState, useEffect } from 'react';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import {
  AboutContent, Action, Add, Count, Input, InputFooter, Text,
} from './style';
/**
 * Add discreption for the community
 * @component
 * @return {React.Component} - Add discreption
 */
function AddSector(props) {
  const { disc2, Name, client } = props;
  const [show, setShow] = useState(true);
  const [count, setCount] = useState(500);
  const [tempString, setTempString] = useState('');
  const [disc, setDisc] = useState(disc2);
  const [haveDisc, setHaveDisc] = useState(true);
  // return to defult mode when click away
  const handleClickAway1 = () => {
    const btn = document.getElementById('save');
    btn.click();
    setShow(true);
    setCount(500 - disc.length);
  };
  useEffect(() => {
    setTempString(disc2);
    setDisc(disc2);
    const a = disc2?.length;
    setCount(500 - a);
    if (disc?.length > 0) {
      setHaveDisc(false);
    } else {
      setHaveDisc(true);
    }
  }, [disc2]);
  // count number of char in input feild to make sure not exeed the limit
  const handleChange = (event) => {
    if (event.target.value.length < 501) {
      setTempString(event.target.value);
      setCount(500 - event.target.value.length);
    }
  };
  const sendData = () => {
    client.patch(`subreddit/${Name}`, { description: disc }); // fetch api
  };
  const c = disc?.length;
  return (
    <AboutContent>
      <ClickAwayListener onClickAway={handleClickAway1}>
        <Add>

          <Box data-testid="add" onClick={() => { setShow(false); setCount(500 - c); }} sx={{ display: 'flex' }}>
            {show && !haveDisc && <Text> Add description</Text>}
            {haveDisc && show && (
            <>
              <Text>
                {' '}
                {disc}
              </Text>
              {' '}
              <ModeEditOutlineOutlinedIcon color="primary" />
            </>
            )}
          </Box>
          {!show
            && (
              <>
                <Input
                  data-testid="input"
                  type="text"
                  value={tempString}
                  placeholder="Tell us About your community"
                  onChange={handleChange}
                  onInput={(e) => {
                  // eslint-disable-next-line radix
                    e.target.value = e.target.value.slice(0, 500);
                    setTempString(e.target.value = e.target.value.slice(0, 500));
                    e.target.style.height = `${e.target.scrollHeight}px`;
                  }}
                />
                <InputFooter>
                  <Count
                    condition={(count === 0).toString()}
                  >
                    {count}
                    {' '}
                    Characters remaining
                  </Count>
                  <Box sx={{ display: 'flex' }}>
                    <Action
                      onClick={() => {
                        setShow(true); setDisc(''); setTempString(''); setCount(500 - disc.length);
                        setHaveDisc(false); sendData();
                      }}
                      sx={{ marginRight: '8px' }}
                      color="red"
                      data-testid="cancel"
                    >
                      Cancel
                    </Action>
                    <Action
                      onClick={() => {
                        setShow(true); setDisc(tempString.trim()); setCount(500 - disc.length);
                        if (disc === '' || disc.length === 0) { setHaveDisc(false); } else {
                          setHaveDisc(true); sendData();
                        }
                      }}
                      color="#0079d3"
                      id="save"

                    >
                      Save

                    </Action>
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
