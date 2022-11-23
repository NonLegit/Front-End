import '@testing-library/jest-dom';
import {
  fireEvent,
  render, screen,
} from '@testing-library/react';
import PostFooter from './PostFooter';

it('open posts tap', async () => {
  // window.history.pushState({}, '', '/Login');
  render(<PostFooter />);
  const btn = screen.getByTestId('show-more');
  fireEvent.click(btn);
  const cancelHidden = screen.getByTestId('more-menu');
  expect(cancelHidden).toBeInTheDocument();

// expect(cancelHidden).toBeInTheDocument();
// expect(global.window.location.pathname).toContain('/submitted');
});
