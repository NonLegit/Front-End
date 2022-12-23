import '@testing-library/jest-dom';
import {
  render, screen,
} from '@testing-library/react';
import SettingsFeed from './SettingsFeed';

// render settings-privacy page
test('should render settings-feed page', () => {
  window.history.pushState({}, '', '/settings/feed');
  render(<SettingsFeed />);
  expect(screen.getByTestId('settings-feed')).toBeInTheDocument();
});
