import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

import { BrowserRouter as Router } from 'react-router-dom';

import MultiLevel from '../../../../MultiLevel';
import CommentActions from './CommentActions';

// test snapshot
test('CommentActions-test-snapshot', async () => {
  const tree = renderer.create(
    <Router>
      <MultiLevel>
        <CommentActions />
      </MultiLevel>
    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
