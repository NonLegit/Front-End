import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import {
  Box, IconButton, ListItem, ListItemText, Tooltip,
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
  Select, Lists, SelectContainer,
} from './style';
import AddSector from './AddDisc/Add';
import AddList from './AddList/AddList';

function Moderation() {
  const [more, setMore] = useState(false);
  // const [data,setData] = useState('');

  const changeShow = () => {
    setMore(!more);
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
          <Sort />
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
        <Tooltip title="Adding community topics allow people to find your community. Add a primary topic and sub topics to be discovered more easily.">
          <IconButton>
            <ErrorOutlineIcon sx={{ transform: 'rotate(180deg)', color: 'gray' }} />
          </IconButton>
        </Tooltip>
      </Box>
      <SelectContainer
        onClick={changeShow}
      >
        <Select>Add a Primary Topic</Select>
        {!more && <ExpandMoreOutlinedIcon color="primary" sx={{ marginTop: '7px', marginLeft: '5px' }} />}
        {more && <ExpandLessOutlinedIcon color="primary" sx={{ marginTop: '7px', marginLeft: '5px' }} />}
      </SelectContainer>
      {more
      && (
      <Lists
        subheader={<li />}
      >
          {[0, 1, 2, 3, 4].map((sectionId) => (
            <li key={`section-${sectionId}`}>
              <ul>
                {[0, 1, 2].map((item) => (
                  <ListItem key={`item-${sectionId}-${item}`}>
                    <ListItemText
                      primary={`Item ${item}`}
                      sx={{
                        span: {
                          fontWeight: 700,
                          fontSize: 13,
                        },
                      }}
                    />
                  </ListItem>
                ))}
              </ul>
            </li>
          ))}
      </Lists>
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
