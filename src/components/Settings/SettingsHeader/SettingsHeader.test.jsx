import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  render, screen,
} from '@testing-library/react';
import SettingsHeader from './SettingsHeader';
import App from '../../../App';

// test snapshot
test('test snapshot', async () => {
  const tree = renderer.create(
    <Router>
      <SettingsHeader />
    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
// render settings-privacy page
it('should render settings-header page', () => {
  window.history.pushState({}, '', '/settings');
  render(<App />);
  expect(screen.getByTestId('settings-header')).toBeInTheDocument();
});
