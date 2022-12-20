import { useContext } from 'react';
import { UserContext } from '../../../../../contexts/UserProvider';
// import { useParams } from 'react-router';
import BackHomeBottun from './BackHomeBottun/BackHome';
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
  // const { username } = useParams();
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
