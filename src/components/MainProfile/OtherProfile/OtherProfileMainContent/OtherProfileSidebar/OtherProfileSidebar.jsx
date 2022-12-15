import { useParams } from 'react-router-dom';
import BackToTop from '../../../../BackToTop/BackToTop';
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
  const { username } = useParams();
  return (
    <SidebarBox>
      <OtherProfileUserInfo username={username} />
      <OtherProfileCommunities />
      <BackToTop />
    </SidebarBox>

  );
}

export default OtherProfileSidebar;
