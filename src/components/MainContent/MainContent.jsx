import { MainContentContainer } from './styles';

function MainContent({ children }) {
  return (
    <MainContentContainer>
      {children}
    </MainContentContainer>
  );
}

export default MainContent;
