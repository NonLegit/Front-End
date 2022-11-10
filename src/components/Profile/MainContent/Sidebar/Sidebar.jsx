import BackHomeBottun from './BackHomeBottun/BackHome';
import Communities from './Communities/Communities';
import { SidebarBox } from './styles';
import UserInfo from './UserInfo/UserInfo';

/** sidebar in profile containing the userinfo and communities you are a moderator of
 * @return {React.Component} - Sidebar
 */
function Sidebar() {
  return (
    <SidebarBox>
      <UserInfo />
      <Communities />
      <BackHomeBottun />
    </SidebarBox>

  );
}

export default Sidebar;
