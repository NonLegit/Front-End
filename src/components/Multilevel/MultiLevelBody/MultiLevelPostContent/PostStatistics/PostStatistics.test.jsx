import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

import { BrowserRouter as Router } from 'react-router-dom';
import MultiLevel from '../../../MultiLevel';
import PostStatistics from './PostStatistics';

// test snapshot
test('PostStatistics-test-snapshot', async () => {
  const tree = renderer.create(
    <Router>
      <MultiLevel>
        <PostStatistics />
      </MultiLevel>
    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
