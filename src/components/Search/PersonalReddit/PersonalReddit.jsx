import FormDialog from '../../HomePage/HomePageContainer/PersonalReddit/PopUpSubReddit/PopUp';
import {
  RedditPersonal, Paragraph, RedditImage, MiddleBox, UpperImage, CustomLink,
} from './styles';

function PersonalReddit() {
  return (
    <RedditPersonal>
      <UpperImage src="https://www.redditstatic.com/desktop2x/img/search-results-community-banner.png" />
      <MiddleBox>
        <RedditImage src="https://www.redditstatic.com/desktop2x/img/snoo-thinking.png" />
      </MiddleBox>
      <Paragraph>
        Have an idea for a new community?
        {' '}
      </Paragraph>
      <CustomLink>
        <FormDialog />
      </CustomLink>
    </RedditPersonal>
  );
}

export default PersonalReddit;
