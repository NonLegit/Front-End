import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Comments from './Comments';
import MainProfile from '../../../../MainProfile';

test('test snapshot', async () => {
  const tree = renderer.create(<Router><MainProfile><Comments /></MainProfile></Router>).toJSON();
  expect(tree).toMatchSnapshot();
});
