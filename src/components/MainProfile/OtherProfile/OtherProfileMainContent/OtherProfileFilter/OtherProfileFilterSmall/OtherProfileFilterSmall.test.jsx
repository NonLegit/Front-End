import '@testing-library/jest-dom';
import {
  fireEvent,
  render, screen,
} from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import OtherProfileFilterSmall from './OtherProfileFilterSmall';

it('show more menu', async () => {
  render(<Router><OtherProfileFilterSmall /></Router>);
  const btn = screen.getByTestId('new-btn');
  fireEvent.click(btn);
  const showList = screen.getByTestId('more-menu');
  expect(showList).toBeInTheDocument();
});
