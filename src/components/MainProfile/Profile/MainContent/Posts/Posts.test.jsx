import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import MainProfile from '../../../MainProfile';
import Post from './Post';

test('test snapshot', async () => {
  const tree = renderer.create(<Router><MainProfile><Post /></MainProfile></Router>).toJSON();
  expect(tree).toMatchSnapshot();
});
