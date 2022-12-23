import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/system';
import theme from '../../../styles/theme';
import MessageInboxBar from './MessageInboxBar';

// test snapshot
test('test snapshot', () => {
  const tree = renderer.create(
    <Router>
      <ThemeProvider theme={theme}>
        <MessageInboxBar />

      </ThemeProvider>
    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
