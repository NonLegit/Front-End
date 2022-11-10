import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { MemoryRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/system';
import HomePageContainer from './HomePageContainer';
import theme from '../../../styles/theme';
import PostTypeContextProvider from '../../../contexts/PostTypeContext';

describe(HomePageContainer, () => {
  it('HomePageContainer renders correctly', () => {
    const tree = renderer
      .create(
        <Router>
          <PostTypeContextProvider>
            <ThemeProvider theme={theme}>
              <HomePageContainer />
            </ThemeProvider>
          </PostTypeContextProvider>
          ,
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
