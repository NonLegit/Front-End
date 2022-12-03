import '@testing-library/jest-dom';
import {
  fireEvent,
  render, screen,
} from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import UserInfo from './UserInfo';
import MainProfile from '../../../../MainProfile';

it('open posts tap', async () => {
  render(<Router><MainProfile><UserInfo /></MainProfile></Router>);
  const btn = screen.getByTestId('show-more');
  fireEvent.click(btn);
  const cancelHidden = screen.getByTestId('option');
  expect(cancelHidden).toBeInTheDocument();
});
