import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import MainContent from '../../ProfileMainContent';
import FilterFull from './FilterFull';

test('test snapshot', async () => {
  const tree = renderer.create(<Router><MainContent><FilterFull /></MainContent></Router>).toJSON();
  expect(tree).toMatchSnapshot();
});
