import { Divider, Typography } from '@mui/material';
import {
  RedditPersonal, Paragraph, RedditImage, MiddleBox, UpperImage, CustomLink,
} from './styles';
import RedditButton from '../../RedditButton/RedditButton';

function PersonalReddit() {
  return (
    <RedditPersonal>
      <UpperImage src="https://www.redditstatic.com/desktop2x/img/id-cards/home-banner@2x.png" />
      <MiddleBox>
        <RedditImage src="https://www.redditstatic.com/desktop2x/img/id-cards/snoo-home@2x.png" />
        <Typography
          component="p"
          sx={{
            fontWeight: 500,
            textTransform: 'capitalize',
            marginLeft: 7,
            pb: 0.8,
            pt: 3,
          }}
        >
          home
        </Typography>
      </MiddleBox>
      <Paragraph>
        Your personal Reddit frontpage. Come here to check in with your favorite communities.
      </Paragraph>
      <Divider sx={{ mt: 1.5 }} />
      <CustomLink to="/submit">
        <RedditButton variant="contained" padding="4px" fontSize={15} fontWeight="bold" sx={{ mt: 1.8 }}>
          create post
        </RedditButton>
      </CustomLink>
      <CustomLink>
        <RedditButton variant="outlined" padding="4px" fontSize={15} fontWeight="bold" sx={{ mt: 1.8 }}>
          create community
        </RedditButton>
      </CustomLink>
    </RedditPersonal>
  );
}

export default PersonalReddit;
