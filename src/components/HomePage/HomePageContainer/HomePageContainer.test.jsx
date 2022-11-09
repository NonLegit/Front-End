import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { MemoryRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/system';
import HomePageContainer from './HomePageContainer';
import theme from '../../../styles/theme';

describe(HomePageContainer, () => {
  it('HomePageContainer renders correctly', () => {
    const tree = renderer
      .create(
        <Router>
          <ThemeProvider theme={theme}>
            <HomePageContainer />
          </ThemeProvider>
          ,
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
