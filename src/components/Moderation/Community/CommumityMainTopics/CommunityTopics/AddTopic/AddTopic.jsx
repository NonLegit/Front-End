import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import { Box } from '@mui/material';
import {
  Add, Input, Text,
} from './style';

/**
   * AddButton(community topics)
   * @component
   * @property  {function} removeItem remove ele from list of topics
   * @property  {function} handleChange remove ele from list of topics
   * @property  {function} trueShawList shoe list of topics
   * @property  {function} handleKeyDown add ele to list of topics

   * @param {string} tempString - list of topics
   * @return {React.Component} - AddButton(community topics)
   */

function AddBtn(props) {
  const {
    tempString, removeItem, handleChange, handleKeyDown, trueShawList,
  } = props;
  return (

    <Add data-testid="add" id="add">
      <>
        <Box sx={{
          display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: '100%',
        }}
        >
          {tempString?.length > 0 && tempString?.map((tag, index) => (
            <Text key={`${index + 0}`}>
              {tag}
              <ClearOutlinedIcon
                fontSize="small"
                onClick={() => {
                  removeItem(index);
                }}
              />
            </Text>
          )) }
        </Box>
        <Input
          data-testid="input"
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
      </>
    </Add>
  );
}
export default AddBtn;
