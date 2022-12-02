import { ThemeProvider } from '@mui/system';
import HomePageContainer from '../components/HomePage/HomePageContainer/HomePageContainer';
import layoutTheme from '../styles/theme/layout';

function HomePage() {
  return (
    <ThemeProvider theme={layoutTheme}>
      <HomePageContainer />
    </ThemeProvider>
  );
}

export default HomePage;
