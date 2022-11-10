import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import MainContent from '../MainContent';
import Content from './Content';

test('test snapshot', async () => {
  const tree = renderer.create(<Router><MainContent><Content /></MainContent></Router>).toJSON();
  expect(tree).toMatchSnapshot();
});