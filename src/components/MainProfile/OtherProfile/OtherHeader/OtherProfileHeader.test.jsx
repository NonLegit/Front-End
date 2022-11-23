import '@testing-library/jest-dom';
import {
  fireEvent,
  render, screen,
} from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import OtherProfileHeader from './OtherProfileHeader';

it('open posts tap', async () => {
  render(<Router><OtherProfileHeader /></Router>);
  const btn = screen.getByTestId('posts-tap');
  fireEvent.click(btn);
  expect(global.window.location.pathname).toContain('/submitted');
});
