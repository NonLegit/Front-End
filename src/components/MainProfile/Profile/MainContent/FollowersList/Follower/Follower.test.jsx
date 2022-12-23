import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Follower from './Follower';

test('test snapshot', async () => {
  const props = {
    follower: {
      isFollowed: true,
    },
  };

  const tree = renderer.create(
    <Router>
      <Follower {...props} />
    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
