import '@testing-library/jest-dom';
// import renderer from 'react-test-renderer';
import {
//   fireEvent,
  render, screen,
} from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainContent from './MainContent';

it('open posts tap', async () => {
  // window.history.pushState({}, '', '/Login');
  render(<Router><MainContent /></Router>);
  //   const btn = screen.getByTestId('postsTap');
  //   fireEvent.click(btn);
  const photo = screen.getByTestId('cover-photo');
  expect(photo).toBeInTheDocument();
//   expect(global.window.location.pathname).toContain('/submitted');
});
