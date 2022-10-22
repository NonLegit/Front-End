import Timeline from '../Timeline/Timeline';
import { MainContainer, OuterContainer } from './styles';
import SideBar from '../SideBar/SideBar';

function HomePageContainer() {
  return (
    <OuterContainer px={3}>
      <MainContainer>
        <Timeline />
        <SideBar />
      </MainContainer>
    </OuterContainer>
  );
}

export default HomePageContainer;
