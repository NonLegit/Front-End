import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Time from './Time';

// test snapshot
test('test snapshot', async () => {
  const tree = renderer.create(<Router><Time /></Router>).toJSON();
  expect(tree).toMatchSnapshot();
});
