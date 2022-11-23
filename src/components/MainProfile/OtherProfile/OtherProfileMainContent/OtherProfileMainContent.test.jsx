import '@testing-library/jest-dom';
// import renderer from 'react-test-renderer';
import {
//   fireEvent,
  render, screen,
} from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import OtherProfileMainContent from './OtherProfileMainContent';

it('open posts tap', async () => {
  render(<Router><OtherProfileMainContent /></Router>);
  const photo = screen.getByTestId('cover-photo');
  expect(photo).toBeInTheDocument();
});
