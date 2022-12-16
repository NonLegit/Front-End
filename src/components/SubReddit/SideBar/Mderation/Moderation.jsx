import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import {
  Box, IconButton, ListItem, ListItemText, ClickAwayListener,
} from '@mui/material';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { useEffect, useState } from 'react';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import moment from 'moment/moment';
import patchData from './ModerationServer';
import Sort from '../MoreIcon/More';
import {
  AboutCountainer, AboutString, CreatedSpan,
  More, Created, Icon, Hr, Bold, Light, SpecialBold, CustomLink,
  CreatPost, Admin, New,
  Select, Lists, SelectContainer, StyledTooltip,
} from './style';
import AddSector from './AddDisc/Add';
import AddList from './AddList/AddList';
/**
 * About section in sidebar for moderators only instead of about section for normal users
 * @component
 * @return {React.Component} - Moderators section in sidebar
 */
function Moderation(props) {
  const {
    topics, disc, Name, primaryTopic, createdAt, num,
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
    patchData(Name, { primaryTopic: val }); // fetch api
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
      <AboutCountainer>
        <AboutString>
          About Community
        </AboutString>
        <More>
          <Admin to={`/r/${Name}/about`}>
            <AdminPanelSettingsOutlinedIcon />
            Mood Tools
          </Admin>
          <Sort margin={15} />
        </More>
      </AboutCountainer>
      <AddSector disc2={disc} Name={Name} />

      <Created>
        <Icon><EmailOutlinedIcon /></Icon>
        <CreatedSpan>
          Created
          {' '}
          {moment(createdAt).add(1, 'days').utc().format('MMMM DD, YYYY')}
        </CreatedSpan>
      </Created>
      <Hr />
      <Box sx={{
        display: 'flex', justifyContent: 'space-between', paddingLeft: 3,
      }}
      >
        <span>
          <Bold>
            {num}
          </Bold>
          <Light>Members</Light>
        </span>
        <span>
          <SpecialBold>
            1.0k
          </SpecialBold>
          <Light>Online</Light>
        </span>
        <span />
        <div />
      </Box>
      <Hr sx={{ marginTop: 0 }} />
      <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '4px' }}>
        {!listOfTopics && <New>New</New>}
        Community topics
        <StyledTooltip title="Adding community topics allow people to find your community. Add a primary topic and sub topics to be discovered more easily.">
          <IconButton>
            <ErrorOutlineIcon sx={{
              transform: 'rotate(180deg)',
              color: 'gray',
              '&:hover': {
                color: '#288eda',
              },
            }}
            />
          </IconButton>
        </StyledTooltip>
      </Box>

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
      <Hr sx={{ marginBottom: 1, marginTop: 0 }} />
      <CustomLink to={`/submit/r/${Name}`}>
        <CreatPost variant="outlined" padding="4px" fontSize={15} fontWeight="bold">
          create Post
        </CreatPost>
      </CustomLink>
    </>
  );
}
export default Moderation;
