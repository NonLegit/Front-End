import {
  ListItem, ListItemText, ClickAwayListener,
} from '@mui/material';
import { useEffect, useState } from 'react';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
// import patchData from './ModerationServer';
import {
  Select, Lists, SelectContainer,
} from './style';
import AddList from './CommunityTopics/CommunityTopics';
/**
 * About section in sidebar for moderators only instead of about section for normal users
 * @component
 * @return {React.Component} - Moderators section in sidebar
 */
function CommunityMianTopic(props) {
  const {
    topics, Name, primaryTopic,
  } = props;
  const [more, setMore] = useState(false);
  const [listOfTopics, setListOfTopics] = useState(false);
  const [selection, setSelection] = useState(primaryTopic);

  const primary = ['Activism', 'Art', 'Addiction Support', 'Anime', 'Beauty and Makeup', 'Business, Economics, and Finance', 'Careers', 'Cars and Motor Vehicles',
    'Celebrity', 'Crafts and DIY', 'Crypto', 'Culture, Race, and Ethnicity', 'Ethics and Philosophy', 'Family and Relationships', 'Fashion', 'Fitness and Nutrition',
    'Food and Drink', 'Funny/Humor', 'Gamming', 'Gender', 'History', 'Hobbies', 'Home and Garden', 'Home and Garden', 'Learning and Education', 'Law', 'Marketplace and Deals',
    'Mature Themes and Adult Content', 'Medical and Mental Health', "Men's Health", 'Meta/Reddit', 'Outdoors and Nature', 'Militery', 'Moves', 'Music', 'Outdoors and Nature', 'Place',
    'Podcasts and Streamers', 'Polices', 'Progeamming', 'Reading, Writing, and Literature'];

  useEffect(() => {
    setSelection(primaryTopic);
    if (primaryTopic === 'Add a Primary Topic' || selection === 'Add a Primary Topic') {
      setListOfTopics(false);
    } else {
      setListOfTopics(true);
    }
  }, [primaryTopic]);
  // show select list or not
  const changeShow = () => {
    setMore(!more);
    // setSelection('Add a Primary Topic');
  };

  const sendData = (val) => {
  //  patchData(Name, { primaryTopic: val }); // fetch api
    console.log(val);
  };

  // handel on select item
  const ListSelected = (e) => {
    setMore(!more);
    setSelection(e.target.textContent);
    setListOfTopics(true);
    sendData(e.target.textContent);
  };

  // close the list in  click away
  const handleClickAway = () => {
    setMore(false);
  };
  return (
    <>
      <SelectContainer
        onClick={changeShow}
      >
        <Select data-testid="select">{selection}</Select>
        {!more && <ExpandMoreOutlinedIcon color="primary" sx={{ marginTop: '7px', marginLeft: '5px' }} />}
        {more && <ExpandLessOutlinedIcon color="primary" sx={{ marginTop: '7px', marginLeft: '5px' }} />}
      </SelectContainer>

      {more
      && (
        <ClickAwayListener onClickAway={handleClickAway}>
          <Lists
            data-testid="list"
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
        </ClickAwayListener>
      )}
      {listOfTopics && <AddList topics={topics} Name={Name} listOfTopics={listOfTopics} />}
    </>
  );
}
export default CommunityMianTopic;
