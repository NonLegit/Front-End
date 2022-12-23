import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

import VerifyEmail from './VerifyEmail';

// test snapshot
test('test snapshot', async () => {
  const tree = renderer.create(
    <Router>

      <VerifyEmail />

    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
