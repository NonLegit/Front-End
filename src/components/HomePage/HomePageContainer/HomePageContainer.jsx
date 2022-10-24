import { useMediaQuery, useTheme } from '@mui/material';
import Timeline from '../Timeline/Timeline';
import { MainContainer, OuterContainer } from './styles';
import SideBar from '../SideBar/SideBar';

function HomePageContainer() {
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <OuterContainer>
      <MainContainer>
        <Timeline />
        {match && <SideBar />}
      </MainContainer>
    </OuterContainer>
  );
}

export default HomePageContainer;
