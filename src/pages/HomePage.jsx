import { ThemeProvider, useTheme } from '@mui/system';
import HomePageContainer from '../components/HomePage/HomePageContainer/HomePageContainer';
import layoutTheme from '../styles/theme/layout';

function HomePage() {
  const theme = useTheme();
  console.log(theme);
  return (
    <ThemeProvider theme={layoutTheme}>
      <HomePageContainer />
    </ThemeProvider>
  );
}

export default HomePage;
