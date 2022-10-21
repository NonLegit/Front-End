import { useTheme } from '@mui/system';
import { Box, Button } from '@mui/material';
import Timeline from '../Timeline/Timeline';
import { MainContainer, OuterContainer } from './styles';
import SideBar from '../SideBar/SideBar';

function HomePageContainer() {
  const theme = useTheme();
  console.log(theme.palette);
  return (
    <OuterContainer px={3}>
      <Button variant="contained" color="secondary">adham</Button>
      <Box color="secondary.main">adham</Box>
      <MainContainer>
        <Timeline />
        <SideBar />
      </MainContainer>
    </OuterContainer>
  );
}

export default HomePageContainer;
