import {
  render, screen,
} from '@testing-library/react';
import '@testing-library/jest-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import App from '../../../../App';
import NotificationCategories from './NotificationCategories';
import NotificationBody from '../NotificationsBody';

// render notification categories
it('render notification categories', async () => {
  window.history.pushState({}, '', '/notifications');
  render(<App />);
  expect(screen.getByTestId('notification-categories-today')).toBeInTheDocument();
});

// check snap shot
it('check snap shot', async () => {
  // window.history.pushState({}, '', '/notifications');
  // render(<NotificationBody />);
  const tree = renderer.create(<NotificationBody />, <NotificationCategories />).toJSON();
  expect(tree).toMatchSnapshot();
});
