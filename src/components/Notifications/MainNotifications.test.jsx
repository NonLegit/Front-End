import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import {
  render, screen, fireEvent,
} from '@testing-library/react';
import MainNotifications from './MainNotifications';
// render notifications page
it('should render notifications page', () => {
  window.history.pushState({}, '', '/notifications');
  render(<MainNotifications />);
  expect(screen.getByTestId('notifications')).toBeInTheDocument();
});

// render notifications Header
it('should render notifications page', () => {
  window.history.pushState({}, '', '/notifications');
  render(<MainNotifications />);
  expect(screen.getByTestId('notifications-header')).toBeInTheDocument();
});

// message page by click message button
it('routes to message page by click message button', async () => {
  window.history.pushState({}, '', '/notifications');
  render(<MainNotifications />);
  const notifications = screen.getByTestId('notifications-header');
  fireEvent.click(screen.getByTestId('message-router'));
  expect(notifications).not.toBeInTheDocument();
});
// test snapshot
test('test snapshot', async () => {
  const tree = renderer.create(<MainNotifications />).toJSON();
  expect(tree).toMatchSnapshot();
});
