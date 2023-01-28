import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

import { BrowserRouter as Router } from 'react-router-dom';
import MultiLevel from '../MultiLevel';
import MultiLevelBody from './MultiLevelBody';

// test snapshot
test('MultiLevel-test-snapshot', async () => {
  const tree = renderer.create(
    <Router>
      <MultiLevel>
        <MultiLevelBody Edit={false} Comment={false} />
      </MultiLevel>
    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
