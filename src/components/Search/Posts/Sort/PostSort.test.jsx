import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Sort from './Sort';

// test snapshot
test('test snapshot', async () => {
  const tree = renderer.create(
    <Router>
      <Sort />
    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
