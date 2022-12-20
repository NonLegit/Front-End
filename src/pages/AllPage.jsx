import { ThemeProvider } from '@mui/system';
import AllContainer from '../components/All/AllContainer/AllContainer';
import layoutTheme from '../styles/theme/layout';

function AllPage() {
  return (
    <ThemeProvider theme={layoutTheme}>
      <AllContainer />
    </ThemeProvider>
  );
}

export default AllPage;
