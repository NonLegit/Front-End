import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import People from './People';

// test snapshot
test('test snapshot', async () => {
  const tree = renderer.create(<Router><People /></Router>).toJSON();
  expect(tree).toMatchSnapshot();
});
