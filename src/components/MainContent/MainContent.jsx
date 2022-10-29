import { MainContentContainer } from './styles';

function MainContent({ children, width }) {
  return (
    <MainContentContainer width={width}>
      {children}
    </MainContentContainer>
  );
}

export default MainContent;
