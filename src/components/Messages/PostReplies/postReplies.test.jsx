import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/system';
import
{
  render, screen,
} from '@testing-library/react';
import theme from '../../../styles/theme';

import PostReplies from './PostReplies';
// test snapshot
test('test snapshot', () => {
  const tree = renderer.create(
    <Router>
      <ThemeProvider theme={theme}>
        <PostReplies />

      </ThemeProvider>
    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
// render messages page
it('should render messages page', () => {
  window.history.pushState({}, '', '/messages');
  render(
    <Router>
      <ThemeProvider theme={theme}>
        <PostReplies />
      </ThemeProvider>
    </Router>,
  );
  expect(screen.queryByText('post reply')).not.toBeInTheDocument();
});
