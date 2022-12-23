import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/system';
import
{
  render, screen,
} from '@testing-library/react';
import theme from '../../../styles/theme';
import MessagesUnread from './MessagesUnread';
// test snapshot
test('test snapshot', () => {
  const tree = renderer.create(
    <Router>
      <ThemeProvider theme={theme}>
        <MessagesUnread />

      </ThemeProvider>
    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
// render unread messages page
it('should render unread messages page', () => {
  window.history.pushState({}, '', '/messages');
  render(
    <Router>
      <ThemeProvider theme={theme}>
        <MessagesUnread />
      </ThemeProvider>
    </Router>,
  );
  expect(screen.queryByText('message unread')).not.toBeInTheDocument();
});
