import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import MainProfile from '../../../MainProfile';
import PostsTap from './PostsTap';

test('test snapshot', async () => {
  const tree = renderer.create(<Router><MainProfile><PostsTap /></MainProfile></Router>).toJSON();
  expect(tree).toMatchSnapshot();
});
