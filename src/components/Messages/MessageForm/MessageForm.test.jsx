import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/system';
import
{
  render, screen,
} from '@testing-library/react';
import theme from '../../../styles/theme';
import MessageForm from './MessageForm';
// test snapshot
test('test snapshot', () => {
  const tree = renderer.create(
    <Router>
      <ThemeProvider theme={theme}>
        <MessageForm />

      </ThemeProvider>
    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
// render  messages forn
it('should render  messages forn', () => {
  window.history.pushState({}, '', '/messages');
  render(
    <Router>
      <ThemeProvider theme={theme}>
        <MessageForm />
      </ThemeProvider>
    </Router>,
  );
  expect(screen.queryByText('Send A Private Message')).toBeInTheDocument();
});
