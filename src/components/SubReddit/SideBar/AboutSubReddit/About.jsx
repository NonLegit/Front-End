import { Box } from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Sort from '../MoreIcon/More';

import {
  AboutContent, AboutCountainer, AboutDisc, AboutString, CreatedSpan,
  More, Created, Icon, Hr, Bold, Light, SpecialBold, CustomLink, CreatPost,
} from './style';
/**
 * About Section for normal user
 * @return {React.Component} - About Section for normal user
 */
function About() {
  return (
    <>
      <AboutCountainer>
        <AboutString>
          About Community
        </AboutString>
        <More sx={{ marginBottom: 1 }}>
          <Sort margin={1} marginLeft="-51px" />
        </More>
      </AboutCountainer>
      <AboutContent>
        <AboutDisc>
          /r/3amjokes - for all the stupid humor of sleep deprivation.
          &quot; So bad, its good &quot;
          Have you been up for
          longer than a normal human being can operate?
          Good. Have you just laughed at a joke that wouldn &apos; t be funny otherwise?
        </AboutDisc>
      </AboutContent>
      <Created>
        <Icon><EmailOutlinedIcon /></Icon>
        <CreatedSpan>Created Oct 19, 2012</CreatedSpan>
      </Created>
      <Hr />
      <Box sx={{ display: 'flex', justifyContent: 'space-between', margin: 1 }}>
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
        <span>
          <Bold>Top 1%</Bold>
          <Light>Ranked by Size</Light>
        </span>
        <div />
      </Box>
      <CustomLink>
        <CreatPost variant="outlined" padding="4px" fontSize={15} fontWeight="bold">
          create Post
        </CreatPost>
      </CustomLink>
    </>
  );
}

export default About;
