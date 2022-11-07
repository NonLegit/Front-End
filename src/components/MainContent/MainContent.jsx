import { MainContentContainer } from './styles';
/**
 * This component works as a container for the left half components
 * like timeline
 *
 * @component MainContent
 * @property {React.Component} children -Components which will be wrapped in main container
 * @property {number} width -The maximum width of the main content
 * @returns {React.Component} Container represents its children
 */

function MainContent({ children, width }) {
  return (
    <MainContentContainer width={width}>
      {children}
    </MainContentContainer>
  );
}

export default MainContent;
