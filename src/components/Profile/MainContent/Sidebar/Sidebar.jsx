import Communities from './Communities/Communities';
import { SidebarBox } from './styles';
import UserInfo from './UserInfo/UserInfo';

function Sidebar(props) {
  const {
    username, karma, cake, followers,
  } = props;
  return (
    <SidebarBox>
      <UserInfo username={username} karma={karma} cake={cake} followers={followers} />
      <Communities />
    </SidebarBox>

  );
}

export default Sidebar;
