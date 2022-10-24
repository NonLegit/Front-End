import Communities from '../Communities/Communities';
import HomePageFooter from '../HomePageFooter/HomePageFooter';
import PersonalReddit from '../PersonalReddit/PersonalReddit';
import RedditPremium from '../RedditPremium/RedditPremium';
import { SideBarContainer } from './styles';

function SideBar() {
  return (
    <SideBarContainer>
      <Communities />
      <RedditPremium />
      <PersonalReddit />
      <HomePageFooter />
    </SideBarContainer>
  );
}

export default SideBar;
