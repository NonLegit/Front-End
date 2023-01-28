import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

import { BrowserRouter as Router } from 'react-router-dom';

import MultiLevel from '../../../MultiLevel';
import CreateComment from './CreateComment';

// test snapshot
test('CreateComment-test-snapshot', async () => {
  const tree = renderer.create(
    <Router>
      <MultiLevel>
        <CreateComment />
      </MultiLevel>
    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
