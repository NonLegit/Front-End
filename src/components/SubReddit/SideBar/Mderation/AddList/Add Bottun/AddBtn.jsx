import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import {
  Action,
  Add, BOX, Count, Input, InputFooter, Text,
} from './style';
import CustomizedDialogs from './ListAlert/Alert';

const { ClickAwayListener, Box } = require('@mui/material');

/**
 * Add item to list of topics
 * @component
 * @property  {function} SaveAction save new data and send to backend
 *
 * @return {React.Component} -  Add item to list of topics
 */
function AddBtn(props) {
  const { sendData } = props;
  const {
    handleClickAway1, falseShaw, show, tempString, removeItem, tags, handleChange, handleKeyDown, trueShawList, trueShaw,
    setTemp, setTag, count, decord,
  } = props;
  const SaveAction = () => {
    setTag(tempString);
    setTemp(tempString);
    sendData();
    // console.log(tempString);
    // sendData();
    trueShaw();
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway1}>

      <Add data-testid="add" condition={show?.toString()} onClick={() => { falseShaw(); }} id="add">
        <CustomizedDialogs falseShow={falseShaw} SaveAction={SaveAction} decord={decord} />
        <>
          <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
            {tempString?.length === 0
              && show && (
              <Text condition={show?.toString()} sx={{ alignItems: 'center' }}>
                <AddOutlinedIcon color="primary" />
                Add Subject
              </Text>
            )}
            {tempString?.length > 0 && (tempString.slice(0, 4))?.map((tag, index) => (
              <Text key={`${index + 0}`} condition={show?.toString()}>
                {tag}
                <ClearOutlinedIcon
                  fontSize="small"
                  onClick={() => {
                    removeItem(index);
                  }}
                />
              </Text>
            )) }
            { !show && tags?.length > 0
              && (tempString.slice(4))?.map((temp, index) => (
                <Text key={`${index + 0}`} condition={show?.toString()}>
                  {temp}
                  <ClearOutlinedIcon
                    fontSize="small"
                    onClick={() => {
                      removeItem(index + 4);
                    }}
                    sx={{ color: 'gray' }}
                  />
                </Text>
              )) }
            {show && tempString?.length > 4 && (
              <BOX>
                +
                {tempString.length - 4}
              </BOX>
            )}
            {show && tempString?.length > 0 && <ModeEditOutlineOutlinedIcon />}
          </Box>
          {!show
            && (
            <Input
              data-testid="input"
              autoFocus
              id="input"
              type="text"
              onChange={handleChange}
              onFocus={trueShawList}
              onInput={(e) => {
                // eslint-disable-next-line radix
                e.target.style.height = `${e.target.scrollHeight}px`;
              }}
              onKeyDown={handleKeyDown}
            />
            )}
        </>
        {!show && (
          <InputFooter>
            <Count
              condition={(count === 25).toString()}
            >
              {tempString?.length}
              /
              25
            </Count>
            <Box sx={{ display: 'flex', marginTop: '1px' }}>
              <Action
                onClick={(e) => {
                  e.stopPropagation();
                  trueShaw();
                  setTemp(tags);
                  setTemp(tags);
                  sendData();
                }}
                id="cancel"
                color="red"
                sx={{ marginRight: '8px' }}
              >
                Cancel
              </Action>
              <Action
                color="#0079d3"
                onClick={(e) => {
                  e.stopPropagation();
                  SaveAction();
                }}
              >
                Save
              </Action>
            </Box>
          </InputFooter>
        )}
      </Add>
    </ClickAwayListener>
  );
}
export default AddBtn;
