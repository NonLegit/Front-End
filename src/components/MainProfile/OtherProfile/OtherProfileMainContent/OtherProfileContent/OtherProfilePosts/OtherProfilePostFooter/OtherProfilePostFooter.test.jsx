import '@testing-library/jest-dom';
import {
  fireEvent,
  render, screen,
} from '@testing-library/react';
import OtherProfilePostFooter from './OtherProfilePostFooter';

it('open posts tap', async () => {
  render(<OtherProfilePostFooter />);
  const btn = screen.getByTestId('show-more');
  fireEvent.click(btn);
  const cancelHidden = screen.getByTestId('more-menu');
  expect(cancelHidden).toBeInTheDocument();
});
