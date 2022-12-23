import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Moderation from './Moderation';

// test snapshot
test('test snapshot', async () => {
  const props = {
    Name: 'aaaa',
    topics: [],
    primaryTopic: 'aaaa',
    createdAt: '',
    num: 500,
    disc: 'aaaaaa',
  };
  const tree = renderer.create(
    <Router>
      <Moderation {...props} />
    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
