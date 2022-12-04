import BackToTop from '../../../../BackToTop/BackToTop';
// import BackHomeBottun from './BackHomeBottun/BackHome';
import Communities from './Communities/Communities';
import { SidebarBox } from './styles';
import UserInfo from './UserInfo/UserInfo';

/**
 * sidebar in profile containing the userinfo and communities you are a moderator of
 *
 * @component Sidebar
 * @returns {React.Component} Sidebar
 */
function Sidebar() {
  return (
    <SidebarBox>
      <UserInfo />
      <Communities />
      <BackToTop />
    </SidebarBox>

  );
}

export default Sidebar;
