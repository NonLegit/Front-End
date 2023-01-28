import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/system';
import
{
  render, screen,
} from '@testing-library/react';
import theme from '../../../styles/theme';
import MessagesDrive from './MessagesDrive';
// test snapshot
test('test snapshot', () => {
  const tree = renderer.create(
    <Router>
      <ThemeProvider theme={theme}>
        <MessagesDrive />

      </ThemeProvider>
    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
// render Drive messages page
it('should render Drive messages page', () => {
  window.history.pushState({}, '', '/messages');
  render(
    <Router>
      <ThemeProvider theme={theme}>
        <MessagesDrive />
      </ThemeProvider>
    </Router>,
  );
  expect(screen.queryByText('message unread')).not.toBeInTheDocument();
});
