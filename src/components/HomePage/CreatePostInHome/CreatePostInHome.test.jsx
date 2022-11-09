import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { MemoryRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/system';
import CreatePostInHome from './CreatePostInHome';
import theme from '../../../styles/theme';

describe(CreatePostInHome, () => {
  it('CreatePostInHome renders correctly', () => {
    const tree = renderer
      .create(
        <Router>
          <ThemeProvider theme={theme}>
            <CreatePostInHome />
          </ThemeProvider>
          ,
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
