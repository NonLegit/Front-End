import '@testing-library/jest-dom';
import {
  fireEvent,
  render, screen,
} from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import OtherProfileMainContent from '../../OtherProfileMainContent';
import OtherProfileUserInfo from './OtherProfileUserInfo';

it('open posts tap', async () => {
  render(<Router><OtherProfileMainContent><OtherProfileUserInfo /></OtherProfileMainContent></Router>);
  const btn = screen.getByTestId('show-more');
  fireEvent.click(btn);
  const cancelHidden = screen.getByTestId('option');
  expect(cancelHidden).toBeInTheDocument();
});
