import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

import { BrowserRouter as Router } from 'react-router-dom';

import MultiLevel from '../../../MultiLevel';
import EditPost from './EditPost';

// test snapshot
test('EditPost-test-snapshot', async () => {
  const tree = renderer.create(
    <Router>
      <MultiLevel>
        <EditPost />
      </MultiLevel>
    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
