import {
  render, screen,
} from '@testing-library/react';
import '@testing-library/jest-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
// import renderer from 'react-test-renderer';
import App from '../../../../App';
// import NotificationCategories from './NotificationCategories';

// real fetch call
it('real fetch call', async () => {
//   const tree = renderer.create(<Router><NotificationCategories /></Router>).toJSON();
//   expect(tree).toMatchSnapshot();
  window.history.pushState({}, '', '/notifications');
  render(<App />);
  expect(screen.getByTestId('notification-categories-today')).toBeInTheDocument();
});
