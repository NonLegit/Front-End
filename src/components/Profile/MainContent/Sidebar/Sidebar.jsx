import BackHomeBottun from './BackHomeBottun/BackHome';
import Communities from './Communities/Communities';
import { SidebarBox } from './styles';
/* eslint-disable import/no-cycle */
import UserInfo from './UserInfo/UserInfo';

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
