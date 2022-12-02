import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  render, screen,
} from '@testing-library/react';
import SettingsFeed from './SettingsFeed';
import App from '../../../App';

// test snapshot
test('test snapshot', async () => {
  const tree = renderer.create(
    <Router>
      <SettingsFeed />
    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
// render settings-privacy page
test('should render settings-feed page', () => {
  window.history.pushState({}, '', '/settings/feed');
  render(<App />);
  expect(screen.getByTestId('settings-feed')).toBeInTheDocument();
});
