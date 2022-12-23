import '@testing-library/jest-dom';
import {
  fireEvent,
  render, screen,
} from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import PostFooter from './PostFooter';
import EditPostContextProvider from '../../../../contexts/EditPostContext';

it('open posts tap', async () => {
  // window.history.pushState({}, '', '/Login');
  render(
    <Router>
      <EditPostContextProvider>
        <PostFooter />
      </EditPostContextProvider>
    </Router>,
  );
  const btn = screen.getByTestId('show-more');
  fireEvent.click(btn);
  const cancelHidden = screen.getByTestId('more-menu');
  expect(cancelHidden).toBeInTheDocument();

// expect(cancelHidden).toBeInTheDocument();
// expect(global.window.location.pathname).toContain('/submitted');
});
