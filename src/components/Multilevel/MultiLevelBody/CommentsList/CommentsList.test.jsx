import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

import { BrowserRouter as Router } from 'react-router-dom';

import MultiLevel from '../../MultiLevel';
import CommentsList from './CommentsList';

// test snapshot
test('CommentsList-test-snapshot', async () => {
  const tree = renderer.create(
    <Router>
      <MultiLevel>
        <CommentsList />
      </MultiLevel>
    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
