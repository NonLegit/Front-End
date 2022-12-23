import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

import { BrowserRouter as Router } from 'react-router-dom';

import MultiLevel from '../../MultiLevel';
import MultiLevelPostContent from './MultiLevelPostContent';

// test snapshot
test('MultiLevelPostContent-test-snapshot', async () => {
  const tree = renderer.create(
    <Router>
      <MultiLevel>
        <MultiLevelPostContent />
      </MultiLevel>
    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
