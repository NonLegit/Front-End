import { Box } from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import moment from 'moment/moment';
import Sort from '../MoreIcon/More';

import {
  AboutContent, AboutCountainer, AboutDisc, AboutString, CreatedSpan,
  More, Created, Icon, Hr, Bold, Light, SpecialBold, CustomLink, CreatPost,
} from './style';
/**
 * About Section for normal user
 * @component
 * @property {string} disc - description data
 * @property {string} Name -name of the subreddit
 * @property {string} createdAt -date of creating the subreddit
 * @property {Boolean} createPost -to detect the sidebar in subreddit or creat post page
 * @property {integer} num -members count

 * @return {React.Component} - About Section for normal user
 */
function About(props) {
  const {
    disc, createdAt, num, Name, createPost,
  } = props;
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
          {disc}
        </AboutDisc>
      </AboutContent>
      <Created>
        <Icon><EmailOutlinedIcon /></Icon>
        <CreatedSpan>
          Created
          {' '}
          {moment(createdAt).add(1, 'days').utc().format('MMMM DD, YYYY')}
        </CreatedSpan>
      </Created>
      <Hr />
      <Box sx={{ display: 'flex', justifyContent: 'space-between', margin: 1 }}>
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
        <span>
          <Bold>Top 1%</Bold>
          <Light>Ranked by Size</Light>
        </span>
        <div />
      </Box>
      { !createPost && (
      <CustomLink to={`/submit/r/${Name}`}>
        <CreatPost variant="outlined" padding="4px" fontSize={15} fontWeight="bold">
          create Post
        </CreatPost>
      </CustomLink>
      )}
    </>
  );
}

export default About;
