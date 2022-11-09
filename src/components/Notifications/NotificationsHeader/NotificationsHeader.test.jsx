import {
  render, screen, fireEvent,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { createMemoryHistory } from 'history';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../../../App';
import NotificationsHeader from './NotificationsHeader';

// render notifications page
it('should render notifications page', () => {
  window.history.pushState({}, '', '/notifications');
  render(<App />);
  expect(screen.getByTestId('notifications')).toBeInTheDocument();
});

// render notifications Header
it('should render notifications page', () => {
  window.history.pushState({}, '', '/notifications');
  render(<App />);
  expect(screen.getByTestId('notifications-header')).toBeInTheDocument();
});

// message page by click message button
it('routes to message page by click message button', async () => {
  createMemoryHistory({ initialEntries: ['/notifications'] });
  render(<App />);
  const notifications = screen.getByTestId('notifications-header');
  fireEvent.click(screen.getByTestId('message-router'));
  expect(notifications).not.toBeInTheDocument();
});

// test snapshot
test('test snapshot', async () => {
  const tree = renderer.create(<Router><NotificationsHeader /></Router>).toJSON();
  expect(tree).toMatchSnapshot();
});
