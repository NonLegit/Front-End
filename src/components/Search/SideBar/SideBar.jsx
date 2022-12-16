import { SideBarContainer, CommunityContainer } from './style';
import Community from './Community/Community';
import People from './People/People';
import PersonalReddit from '../PersonalReddit/PersonalReddit';
import BackHome from '../../BackHomeBottun/BackHome';

function SideBar() {
  return (
    <SideBarContainer>
      <CommunityContainer>
        <Community />
      </CommunityContainer>
      <CommunityContainer>
        <People />
      </CommunityContainer>
      <PersonalReddit />
      <BackHome />
    </SideBarContainer>
  );
}

export default SideBar;
