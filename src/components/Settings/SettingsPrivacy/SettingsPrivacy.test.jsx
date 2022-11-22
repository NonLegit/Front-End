import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  render, screen,
} from '@testing-library/react';
import SettingsPrivacy from './SettingsPrivacy';
import App from '../../../App';
// test snapshot
test('test snapshot', async () => {
  const tree = renderer.create(
    <Router>
      <SettingsPrivacy />
    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
// render settings-privacy page
test('should render settings-privacy page', () => {
  window.history.pushState({}, '', '/settings/privacy');
  render(<App />);
  expect(screen.getByTestId('settings-privacy')).toBeInTheDocument();
});
