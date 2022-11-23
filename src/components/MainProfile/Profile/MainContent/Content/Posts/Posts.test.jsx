import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import MainContent from '../../ProfileMainContent';
import Posts from './Posts';

test('test snapshot', async () => {
  const tree = renderer.create(<Router><MainContent><Posts /></MainContent></Router>).toJSON();
  expect(tree).toMatchSnapshot();
});
