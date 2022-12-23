import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

import { BrowserRouter as Router } from 'react-router-dom';

import EditComment from './EditComment';
import MultiLevel from '../../../../MultiLevel';

// test snapshot
test('EditComment-test-snapshot', async () => {
  const tree = renderer.create(
    <Router>
      <MultiLevel>
        <EditComment />
      </MultiLevel>
    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
