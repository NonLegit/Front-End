import {
  Box, ClickAwayListener,
  ListItem, ListItemText,
} from '@mui/material';
import { useState, useEffect } from 'react';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import {
  AboutContent,
  Action,
  Add, Count,
  Input,
  BOX,
  InputFooter, Text,
  Lists,
} from './style';

const primary = ['Activism', 'Art', 'Addiction Support', 'Anime', 'Beauty and Makeup', 'Business, Economics, and Finance', 'Careers', 'Cars and Motor Vehicles',
  'Celebrity', 'Crafts and DIY', 'Crypto', 'Culture, Race, and Ethnicity', 'Ethics and Philosophy', 'Family and Relationships', 'Fashion', 'Fitness and Nutrition',
  'Food and Drink', 'Funny/Humor', 'Gamming', 'Gender', 'History', 'Hobbies', 'Home and Garden', 'Home and Garden', 'Learning and Education', 'Law', 'Marketplace and Deals',
  'Mature Themes and Adult Content', 'Medical and Mental Health', "Men's Health", 'Meta/Reddit', 'Outdoors and Nature', 'Militery', 'Moves', 'Music', 'Outdoors and Nature', 'Place',
  'Podcasts and Streamers', 'Polices', 'Progeamming', 'Reading, Writing, and Literature'];

function AddList() {
  const [show, setShow] = useState(true);
  const [showList, setShowList] = useState(true);
  // eslint-disable-next-line prefer-const
  const [tags, setTags] = useState(['Ahmed', 'eslam', 'nour']);
  const [tempString, setTempString] = useState(tags);
  const [count, setCount] = useState(tags.length);

  const handleClickAway1 = () => {
    setShow(true);
    setCount(tags.length);
  };
  useEffect(() => {
    setTempString(tags);
  }, []);
  // ///////////////////////////////////
  const handleChange = (event) => {
    console.log((event.target > 'Text').length);
    if (event.target.value.length < 26) {
      // setData(event.target.value);
      setCount((event.target > 'Text').length);
    }
  };
  const handleKeyDown = (e) => {
    if (tempString.length < 25 && !tempString.includes(e.target.value)) {
      if (e.key !== 'Enter') return;
      const { value } = e.target;
      if (!value.trim()) return;
      setTempString([...tempString, value]);
    }
    e.target.value = '';
  };
  function removeItem(value) {
    setTempString(tempString.filter((ele, index) => index !== value));
  }
  const ListSelected = (e) => {
    e.stopPropagation();
    if (!tempString.includes(e.target.textContent)) {
      setTempString([...tempString, e.target.textContent]);
      const btn = document.getElementById('add');
      btn.click();
      const input = document.getElementById('input');
      input.focus();
    }
  };
  return (
    <AboutContent>
      <ClickAwayListener onClickAway={handleClickAway1}>
        <Add condition={show.toString()} onClick={() => { setShow(false); }} id="add">
          <>
            <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
              {tempString.length > 0 && (tempString.slice(0, 4)).map((tag, index) => (
                <Text key={`${index + 0}`} condition={show.toString()}>
                  {tag}
                  <ClearOutlinedIcon
                    fontSize="small"
                    onClick={(e) => {
                      removeItem(index);
                      console.log(e.target.parentElement.textContent);
                    }}
                  />
                </Text>
              )) }
              { !show && tags.length > 0
              && (tempString.slice(4)).map((temp, index) => (
                <Text key={`${index + 0}`} condition={show.toString()}>
                  {temp}
                  <ClearOutlinedIcon
                    fontSize="small"
                    onClick={(e) => {
                      removeItem(index + 4);
                      console.log(typeof (e.target.parentElement.textContent));
                    }}
                    sx={{ color: 'gray' }}
                  />
                </Text>
              )) }
              {show && tempString.length > 4 && (
              <BOX>
                +
                  {tempString.length - 4}
              </BOX>
              )}
              {show && <ModeEditOutlineOutlinedIcon />}
            </Box>
            {!show
            && (
            <Input
              autoFocus
              id="input"
              type="text"
              onChange={handleChange}
              onFocus={() => setShowList(true)}
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
              {tempString.length}
              /
              25
            </Count>
            <Box sx={{ display: 'flex', marginTop: '1px' }}>
              <Action
                onClick={(e) => {
                  e.stopPropagation();
                  setShow(true);
                  setTempString(tags);
                }}
                color="red"
                sx={{ marginRight: '8px' }}
              >
                Cancel
              </Action>
              <Action
                color="#0079d3"
                onClick={(e) => {
                  e.stopPropagation();
                  setShow(true);
                  setTags(tempString);
                }}
              >
                Save
              </Action>
            </Box>
          </InputFooter>
          )}
        </Add>
      </ClickAwayListener>
      {
          !show
          && tempString.length < 25 && showList
          && (
            <Lists
              subheader={<li />}
            >
              {[0].map((sectionId) => (
                <li key={`section-${sectionId}`}>
                  <ul>
                    {primary.map((item) => (
                      <ListItem key={`item-${sectionId}-${item}`}>
                        <ListItemText
                          primary={`${item}`}
                          sx={{
                            span: {
                              fontWeight: 700,
                              fontSize: 13,
                              cursor: 'pointer',
                            },
                          }}
                          onClick={ListSelected}
                        />
                      </ListItem>
                    ))}
                  </ul>
                </li>
              ))}
            </Lists>
          )
        }

    </AboutContent>
  );
}
export default AddList;
