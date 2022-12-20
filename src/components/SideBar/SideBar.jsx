import { SideBarContainer } from './styles';
/**
 * This component works as a container for the right half components
 * like communities in home page
 *
 * @component SideBar
 * @property {React.Component} children -Components which will be wrapped in sidebar
 * @returns {React.Component} Container represents its children
 */

function SideBar({ children, responsive }) {
  return (
    <SideBarContainer responsive={responsive}>
      {children}
    </SideBarContainer>
  );
}

export default SideBar;
