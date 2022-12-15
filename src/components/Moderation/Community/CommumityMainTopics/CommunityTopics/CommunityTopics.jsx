import {
  ClickAwayListener,
  //  Box, ClickAwayListener,
  ListItem, ListItemText,
} from '@mui/material';
import { useState, useEffect } from 'react';

// import patchData from '../ModerationServer';

import AddBtn from './AddTopic/AddTopic';
import {
  AboutContent,
  Lists,
} from './style';

const primary = ['Activism', 'Art', 'Addiction Support', 'Anime', 'Beauty and Makeup', 'Business, Economics, and Finance', 'Careers', 'Cars and Motor Vehicles',
  'Celebrity', 'Crafts and DIY', 'Crypto', 'Culture, Race, and Ethnicity', 'Ethics and Philosophy', 'Family and Relationships', 'Fashion', 'Fitness and Nutrition',
  'Food and Drink', 'Funny/Humor', 'Gamming', 'Gender', 'History', 'Hobbies', 'Home and Garden', 'Home and Garden', 'Learning and Education', 'Law', 'Marketplace and Deals',
  'Mature Themes and Adult Content', 'Medical and Mental Health', "Men's Health", 'Meta/Reddit', 'Outdoors and Nature', 'Militery', 'Moves', 'Music', 'Outdoors and Nature', 'Place',
  'Podcasts and Streamers', 'Polices', 'Progeamming', 'Reading, Writing, and Literature'];
  /**
   * AddList(community topics)
   * @component
   * @return {React.Component} - community topics
   */
function AddList(props) {
  const {
    topics,
  } = props;
  const [showList, setShowList] = useState(false);
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
    if ((tempString.length < 25 && !tempString.includes(e.target.value))) {
      if (e.key !== 'Enter') return;
      const { value } = e.target;
      if (!value.trim()) return;
      setTempString([...tempString, value]);
    }
    e.target.value = '';
  };
    // to rempve element when press x
  const removeItem = (value) => {
    setTempString(tempString.filter((ele, index) => index !== value));
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
  const trueShawList = () => {
    setShowList(true);
  };
  const handleClickAway = () => {
    setShowList(false);
  };
  //   const sendData = () => {
  //     patchData(Name, { topics: tempString }); // fetch api
  //   };
  //   const decord = () => {
  //     trueShaw();
  //     setTempString(tags);
  //     setTag(tags);
  //     setShow(true);
  //     trueShaw();
  //     console.log(show);
  //   };
  return (
    <ClickAwayListener onClickAway={handleClickAway}>

      <AboutContent>
        <AddBtn
          trueShawList={trueShawList}
          handleChange={handleChange}
          handleKeyDown={handleKeyDown}
          removeItem={removeItem}
          tempString={tempString}
          count={count}
        />
        {
            tempString?.length < 25 && showList
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
    </ClickAwayListener>

  );
}
export default AddList;
