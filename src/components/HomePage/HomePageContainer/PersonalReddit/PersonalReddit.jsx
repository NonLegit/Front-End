import { Divider, Typography } from '@mui/material';
import {
  RedditPersonal, Paragraph, RedditImage, MiddleBox, UpperImage, CustomLink,
} from './styles';
import RedditButton from '../../../RedditButton/RedditButton';
import FormDialog from './PopUpSubReddit/PopUp';
/**
 * This component contains info about personal
 * Reddit frontpage.
 *
 * @component PersonalReddit
 * @property {string} title -Title of personal reddit
 * @property {string} paragraph -Paragraph of personal reddit
 * @property {string} image -Image of personal reddit
 * @returns {React.Component}  Buttons to show info about communities
 */

function PersonalReddit(props) {
  const { title, paragraph, image } = props;
  return (
    <RedditPersonal>
      <UpperImage src={image} />
      <MiddleBox>
        <RedditImage src="https://www.redditstatic.com/desktop2x/img/id-cards/snoo-home@2x.png" />
        <Typography
          component="p"
          sx={{
            fontWeight: 500,
            marginLeft: 7,
            pb: 0.8,
            pt: 3,
          }}
        >
          {title}
        </Typography>
      </MiddleBox>
      <Paragraph>
        {paragraph}
      </Paragraph>
      <Divider sx={{ mt: 1.5 }} />
      <CustomLink to="/submit">
        <RedditButton variant="contained" padding="4px" fontSize={15} fontWeight="bold" sx={{ mt: 1.8 }}>
          create post
        </RedditButton>
      </CustomLink>
      <FormDialog />
    </RedditPersonal>
  );
}

export default PersonalReddit;
