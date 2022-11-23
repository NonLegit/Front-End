import BackHomeBottun from './BackHomeBottun/BackHome';
import OtherProfileCommunities from './OtherProfileCommunities/OtherProfileCommunities';
import { SidebarBox } from './styles';
import OtherProfileUserInfo from './OtherProfileUserInfo/OtherProfileUserInfo';

/**
 * sidebar in profile containing the userinfo and communities you are a moderator of
 *
 * @component OtherProfileSidebar
 * @returns {React.Component} OtherProfileSidebar
 */
function OtherProfileSidebar() {
  return (
    <SidebarBox>
      <OtherProfileUserInfo />
      <OtherProfileCommunities />
      <BackHomeBottun />
    </SidebarBox>

  );
}

export default OtherProfileSidebar;
