import { Box, ClickAwayListener } from '@mui/material';
import { useState, useEffect } from 'react';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import EmptyStr from '../../../../../utils/EmptyStr';
import patchData from '../../../server';
import {
  AboutContent, Action, Add, Count, Input, InputFooter, Text,
} from './style';
import CustomizedDialogs from './DiscAlerdt/DistAlert';
/**
 * Add discreption for the community
 * @component
 * @return {React.Component} - Add discreption
 */
function AddSector(props) {
  const { disc2, Name } = props;
  const [show, setShow] = useState(true);
  const [count, setCount] = useState(500);
  const [tempString, setTempString] = useState('');
  const [disc, setDisc] = useState(disc2);
  const [haveDisc, setHaveDisc] = useState(true);
  const [statusCode, setStatusCode] = useState(null);

  // return to defult mode when click away
  const handleClickAway1 = () => {
    // const btn = document.getElementById('save');
    // btn.click();
    // setShow(false);
    // setCount(500 - disc.length);
    const ele = document.getElementById('discInput');
    if (disc !== ele.value?.trim() && !show) {
      const alert = document.getElementById('DiscAlert');
      // setShow(true);
      console.log(show);
      alert.click();
    } else {
      setShow(true);
    }
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

  useEffect(() => {
    if (statusCode === 401) {
      window.location.href = './login';
    }
  }, [statusCode]);

  // count number of char in input feild to make sure not exeed the limit
  const handleChange = (event) => {
    if (event.target.value.length < 501) {
      setTempString(event.target.value);
      setCount(500 - event.target.value.length);
    }
  };
  const falseShow = () => {
    setShow(false);
  };
  const sendData = () => {
    console.log(Name);
    setStatusCode(patchData(`subreddits/${Name}`, { description: tempString.trim() })); // fetch api
  };
  const SaveAction = async () => {
    setShow(true);
    await setDisc(tempString.trim());
    setTempString(tempString.trim());
    setCount(500 - disc.length);
    if (EmptyStr(disc)) { setHaveDisc(false); } else {
      setHaveDisc(true);
    }
    sendData();
    // sendData();
  };
  const decord = () => {
    setShow(true);
    setTempString(disc);
    setDisc(disc);
    setCount(500 - disc.length);
    if (!EmptyStr(disc)) {
      setHaveDisc(true);
    }
  };
  const c = disc?.length;
  return (
    <AboutContent>

      <ClickAwayListener onClickAway={handleClickAway1}>
        <Add>
          <CustomizedDialogs falseShow={falseShow} SaveAction={SaveAction} decord={decord} />
          <Box data-testid="add" onClick={() => { setShow(false); setCount(500 - c); }} sx={{ display: 'flex', overflowWrap: 'anywhere' }}>
            {show && !haveDisc && <Text> Add description</Text>}
            {(haveDisc && show) && (
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
                  id="discInput"
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
                      onClick={SaveAction}
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
