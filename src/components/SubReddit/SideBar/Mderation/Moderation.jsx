import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import {
  Box, IconButton, ListItem, ListItemText, ClickAwayListener,
} from '@mui/material';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { useState } from 'react';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import Sort from '../MoreIcon/More';
import {
  AboutCountainer, AboutString, CreatedSpan,
  More, Created, Icon, Hr, Bold, Light, SpecialBold, CustomLink,
  CreatPost, Admin, New,
  Select, Lists, SelectContainer, StyledTooltip,
} from './style';
import AddSector from './AddDisc/Add';
import AddList from './AddList/AddList';

function Moderation() {
  const [more, setMore] = useState(false);
  const [selection, setSelection] = useState('Add a Primary Topic');
  // const [data,setData] = useState('');
  const primary = ['Activism', 'Art', 'Addiction Support', 'Anime', 'Beauty and Makeup', 'Business, Economics, and Finance', 'Careers', 'Cars and Motor Vehicles',
    'Celebrity', 'Crafts and DIY', 'Crypto', 'Culture, Race, and Ethnicity', 'Ethics and Philosophy', 'Family and Relationships', 'Fashion', 'Fitness and Nutrition',
    'Food and Drink', 'Funny/Humor', 'Gamming', 'Gender', 'History', 'Hobbies', 'Home and Garden', 'Home and Garden', 'Learning and Education', 'Law', 'Marketplace and Deals',
    'Mature Themes and Adult Content', 'Medical and Mental Health', "Men's Health", 'Meta/Reddit', 'Outdoors and Nature', 'Militery', 'Moves', 'Music', 'Outdoors and Nature', 'Place',
    'Podcasts and Streamers', 'Polices', 'Progeamming', 'Reading, Writing, and Literature'];
  const changeShow = () => {
    setMore(!more);
    setSelection('Add a Primary Topic');
  };
  const ListSelected = (e) => {
    setMore(!more);
    setSelection(e.target.textContent);
  };
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
          <Admin>
            <AdminPanelSettingsOutlinedIcon />
            Mood Tools
          </Admin>
          <Sort margin={15} />
        </More>
      </AboutCountainer>
      <AddSector />

      <Created>
        <Icon><EmailOutlinedIcon /></Icon>
        <CreatedSpan>Created Oct 19, 2012</CreatedSpan>
      </Created>
      <Hr />
      <Box sx={{
        display: 'flex', justifyContent: 'space-between', paddingLeft: 3,
      }}
      >
        <span>
          <Bold>
            1.4m
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
        <New>New</New>
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
        <Select>{selection}</Select>
        {!more && <ExpandMoreOutlinedIcon color="primary" sx={{ marginTop: '7px', marginLeft: '5px' }} />}
        {more && <ExpandLessOutlinedIcon color="primary" sx={{ marginTop: '7px', marginLeft: '5px' }} />}
      </SelectContainer>

      {more
      && (
        <ClickAwayListener onClickAway={handleClickAway}>
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
        </ClickAwayListener>
      )}

      <AddList />
      <Hr sx={{ marginBottom: 1, marginTop: 0 }} />
      <CustomLink>
        <CreatPost variant="outlined" padding="4px" fontSize={15} fontWeight="bold">
          create Post
        </CreatPost>
      </CustomLink>
    </>
  );
}
export default Moderation;
