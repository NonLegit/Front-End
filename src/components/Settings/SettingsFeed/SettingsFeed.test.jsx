import '@testing-library/jest-dom';
import {
  render, screen,
} from '@testing-library/react';
import SettingsFeed from './SettingsFeed';

const mockAlert = jest.fn();
jest.mock('react-alert', () => ({
  ...jest.requireActual('react-alert'),
  useAlert: () => mockAlert,
}));
// render settings-privacy page
test('should render settings-feed page', () => {
  window.history.pushState({}, '', '/settings/feed');
  render(<SettingsFeed />);
  expect(screen.getByTestId('settings-feed')).toBeInTheDocument();
});
