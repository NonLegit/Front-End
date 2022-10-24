import { SideBarContainer } from './styles';

function SideBar({ children }) {
  return (
    <SideBarContainer>
      {children}
    </SideBarContainer>
  );
}

export default SideBar;
