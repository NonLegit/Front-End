import '@testing-library/jest-dom';

import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/system';

import ShallowRenderer from 'react-test-renderer/shallow';
import
{
  render, screen,
} from '@testing-library/react';
import theme from '../../../../styles/theme';
import MessageBody from './MessageBody';

const renderer = new ShallowRenderer();
const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));
// test snapshot
test('test snapshot', () => {
  const tree = renderer.render(
    <Router>
      <ThemeProvider theme={theme}>
        <MessageBody />
      </ThemeProvider>
    </Router>,
  );
  expect(tree).toMatchSnapshot();
});
// render unread messages page
it('should render unread messages page', () => {
  window.history.pushState({}, '', '/messages');
  render(
    <Router>
      <ThemeProvider theme={theme}>
        <MessageBody />
      </ThemeProvider>
    </Router>,
  );
  expect(screen.queryByText('from')).not.toBeInTheDocument();
});
