import {
  render, screen,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import App from '../../../App';
import NotificationsBody from './NotificationsBody';

// render notifications body
it('should render notifications body', () => {
  window.history.pushState({}, '', '/notifications');
  render(<App />);
  expect(screen.getByTestId('notifications-body-test')).toBeInTheDocument();
});

// check snap shot
it('check snap shot', async () => {
  const tree = renderer.create(<Router><NotificationsBody /></Router>).toJSON();
  expect(tree).toMatchSnapshot();
});
