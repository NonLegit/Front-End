import '@testing-library/jest-dom';

import { BrowserRouter as Router } from 'react-router-dom';
import ShallowRenderer from 'react-test-renderer/shallow';
import MainProfile from '../../../MainProfile';
import Post from './Post';

test('test snapshot', async () => {
  const renderer = new ShallowRenderer();

  const tree = renderer.render(
    <Router>
      <MainProfile>
        <Post />
      </MainProfile>
    </Router>,
  );
  expect(tree).toMatchSnapshot();
});
