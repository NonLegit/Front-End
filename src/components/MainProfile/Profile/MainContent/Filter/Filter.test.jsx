import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import MainProfile from '../../../MainProfile';
import Filter from './Filter';

test('test snapshot', async () => {
  const tree = renderer.create(<Router><MainProfile><Filter /></MainProfile></Router>).toJSON();
  expect(tree).toMatchSnapshot();
});
