import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Subreddits from './Subreddits';

// test snapshot
test('test snapshot', async () => {
  const tree = renderer.create(
    <Router>
      <Subreddits />
    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
