import { SideBarContainer, CommunityContainer } from './style';
import Community from './Community/Community';
import People from './People/People';
import PersonalReddit from '../PersonalReddit/PersonalReddit';
import BackHome from '../../BackHomeBottun/BackHome';
/**
 * Search by posts sidebar
 * @component

 * @return {React.Component} -Search by posts sidebar
 */
function SideBar(props) {
  const { subreddits, peoples } = props;
  return (
    <SideBarContainer>
      <CommunityContainer>
        <Community subreddits={subreddits} />
      </CommunityContainer>
      <CommunityContainer>
        <People peoples={peoples} />
      </CommunityContainer>
      <PersonalReddit />
      <BackHome />
    </SideBarContainer>
  );
}

export default SideBar;
