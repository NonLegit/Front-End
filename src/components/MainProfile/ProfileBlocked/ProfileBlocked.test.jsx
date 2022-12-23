import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import ProfileBlocked from './ProfileBlocked';

test('test snapshot', async () => {
  const tree = renderer.create(
    <Router>
      <ProfileBlocked />
    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
