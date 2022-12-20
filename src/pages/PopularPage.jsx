import { ThemeProvider } from '@mui/system';
import PopularContainer from '../components/Popular/PopularContainer/PopularContainer';
import layoutTheme from '../styles/theme/layout';

function PopularPage() {
  return (
    <ThemeProvider theme={layoutTheme}>
      <PopularContainer />
    </ThemeProvider>
  );
}

export default PopularPage;
