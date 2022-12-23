import {
  //  Box, ClickAwayListener,
  ListItem, ListItemText,
} from '@mui/material';
import { useState, useEffect } from 'react';
import KeyDown from '../../../../../utils/KeyDown';
import FilterArray from '../../../../../utils/FilterArray';

import patchData from '../ModerationServer';

import AddBtn from './Add Bottun/AddBtn';
import {
  AboutContent, Lists,
} from './style';

const primary = ['Activism', 'Art', 'Addiction Support', 'Anime', 'Beauty and Makeup', 'Business, Economics, and Finance', 'Careers', 'Cars and Motor Vehicles',
  'Celebrity', 'Crafts and DIY', 'Crypto', 'Culture, Race, and Ethnicity', 'Ethics and Philosophy', 'Family and Relationships', 'Fashion', 'Fitness and Nutrition',
  'Food and Drink', 'Funny/Humor', 'Gamming', 'Gender', 'History', 'Hobbies', 'Home and Garden', 'Home and Garden', 'Learning and Education', 'Law', 'Marketplace and Deals',
  'Mature Themes and Adult Content', 'Medical and Mental Health', "Men's Health", 'Meta/Reddit', 'Outdoors and Nature', 'Militery', 'Moves', 'Music', 'Outdoors and Nature', 'Place',
  'Podcasts and Streamers', 'Polices', 'Progeamming', 'Reading, Writing, and Literature'];
/**
 * AddList(community topics)
 * @component
 * @property  {function} handleKeyDown  handel on press enter to add the community topic
 * @property  {function} removeItem to rempve element when press x
 * @property  {function} ListSelected add item when select from list
 * @property  {function} trueShaw open the input
 * @property  {function} falseShaw clase the input
 * @property  {function} trueShawList open the list ip topics
 * @property  {function} setTemp set new list of topics
 * @property  {function} setTag set new list of topics
 * @property  {function} sendData send data to backend
 * @property  {function} handleClickAway1 return to default view of add list
 * @property  {function} decord descord all changes

 * @property {object} topics -list of community topics
 * @property {string} Name -name of the subreddit
 * @return {React.Component} - AddList(community topics)
 */
function AddList(props) {
  const {
    topics, Name,
  } = props;
  const [show, setShow] = useState(true);
  const [showList, setShowList] = useState(true);
  // eslint-disable-next-line prefer-const
  const [tags, setTags] = useState(topics);
  const [tempString, setTempString] = useState(tags);
  const [count, setCount] = useState(tags?.length);

  useEffect(() => {
    setTags(topics);
    setTempString(topics);
  }, [topics]);
  // save the change in input field to get count if char
  const handleChange = (event) => {
    console.log((event.target > 'Text').length);
    if (event.target.value.length < 26) {
      setCount((event.target > 'Text').length);
    }
  };
  // handel on press enter to add the community topic
  const handleKeyDown = (e) => {
    if (KeyDown(tempString, e.target.value)) {
      if (e.key !== 'Enter') return;
      const { value } = e.target;
      if (!value.trim()) return;
      setTempString([...tempString, value]);
    }
    e.target.value = '';
  };
  // to rempve element when press x
  const removeItem = (value) => {
    setTempString(FilterArray(tempString, value));
  };

  // add item when select from list
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
  const trueShaw = () => {
    setShow(true);
  };
  const falseShaw = () => {
    setShow(false);
  };
  const trueShawList = () => {
    setShowList(true);
  };
  const setTemp = (t) => {
    setTempString(t);
  };
  const setTag = (t) => {
    setTags(t);
  };
  const sendData = () => {
    patchData(Name, { topics: tempString }); // fetch api
  };
    // return to default view of add list
  const handleClickAway1 = () => {
    // setTags(tempString);
    setShow(true);
    // setCount(tags.length);
    // sendData();

    console.log('hello');
    if (tags !== tempString && !show) {
      const alert = document.getElementById('ListAlert');
      console.log('show');
      alert.click();
    } else {
      // setShow(true);
    }
  };
  const decord = () => {
    trueShaw();
    setTempString(tags);
    setTag(tags);
    setCount(500 - tags.length);
    setShow(true);
    trueShaw();
    console.log(show);
  };
  return (
    <AboutContent>
      <AddBtn sendData={sendData} decord={decord} handleClickAway1={handleClickAway1} setTag={setTag} setTemp={setTemp} trueShaw={trueShaw} trueShawList={trueShawList} handleChange={handleChange} handleKeyDown={handleKeyDown} removeItem={removeItem} falseShaw={falseShaw} show={show} tempString={tempString} tags={tags} count={count} />
      {
          tempString?.length < 25 && showList
          && !show
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
