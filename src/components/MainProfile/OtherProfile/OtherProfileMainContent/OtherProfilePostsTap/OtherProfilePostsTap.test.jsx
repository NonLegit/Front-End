import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import OtherProfileMainContent from '../OtherProfileMainContent';
import OtherProfilePostsTap from './OtherProfilePostsTap';

test('test snapshot', async () => {
  const tree = renderer.create(<Router><OtherProfileMainContent><OtherProfilePostsTap /></OtherProfileMainContent></Router>).toJSON();
  expect(tree).toMatchSnapshot();
});

test('test snapshot', async () => {
  render(<Router><OtherProfileMainContent><OtherProfilePostsTap /></OtherProfileMainContent></Router>);
//   expect(tree).toMatchSnapshot();
});
