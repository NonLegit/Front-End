import '@testing-library/jest-dom';
// import renderer from 'react-test-renderer';
import {
  fireEvent,
  render, screen,
} from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './ProfileHeader';

it('open posts tap', async () => {
  // window.history.pushState({}, '', '/Login');
  render(<Router><Header /></Router>);
  const btn = screen.getByTestId('posts-tap');
  fireEvent.click(btn);
  //   const cancel = screen.getByTestId('cancelBtn');
  //   expect(cancel).toBeInTheDocument();
  expect(global.window.location.pathname).toContain('/submitted');
});
