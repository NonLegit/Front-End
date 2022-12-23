import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import ErrorPageComponent from './ErrorPageComponent';
// test snapshot
test('test snapshot', async () => {
  const tree = renderer.create(
    <Router>
      <ErrorPageComponent />
    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
