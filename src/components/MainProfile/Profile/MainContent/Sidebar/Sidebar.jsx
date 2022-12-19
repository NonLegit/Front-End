import { useContext } from 'react';
import BackHomeBottun from './BackHomeBottun/BackHome';
import Communities from './Communities/Communities';
import { SidebarBox } from './styles';
import UserInfo from './UserInfo/UserInfo';
import { UserContext } from '../../../../../contexts/UserProvider';

/**
 * sidebar in profile containing the userinfo and communities you are a moderator of
 *
 * @component Sidebar
 * @returns {React.Component} Sidebar
 */
function Sidebar() {
  const { username } = useContext(UserContext);

  return (
    <SidebarBox>
      <UserInfo username={username} />
      <Communities />
      <BackHomeBottun />
    </SidebarBox>

  );
}

export default Sidebar;
