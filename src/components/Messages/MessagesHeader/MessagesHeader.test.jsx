import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/system';
import
{
  render, screen,
} from '@testing-library/react';
import theme from '../../../styles/theme';
import MessagesHeader from './MessagesHeader';
// test snapshot
test('test snapshot', () => {
  const tree = renderer.create(
    <Router>
      <ThemeProvider theme={theme}>
        <MessagesHeader />

      </ThemeProvider>
    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

// render  messages Header header
it('should render messages header page', () => {
  window.history.pushState({}, '', '/messages');
  render(
    <Router>
      <ThemeProvider theme={theme}>
        <MessagesHeader />
      </ThemeProvider>
    </Router>,
  );
  expect(screen.queryByText('Send A Private Message')).toBeInTheDocument();
});
