import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import MainContent from '../MainContent';
import PostsTap from './PostsTap';

test('test snapshot', async () => {
  const tree = renderer.create(<Router><MainContent><PostsTap /></MainContent></Router>).toJSON();
  expect(tree).toMatchSnapshot();
});

test('test snapshot', async () => {
  render(<Router><MainContent><PostsTap /></MainContent></Router>);
//   expect(tree).toMatchSnapshot();
});
