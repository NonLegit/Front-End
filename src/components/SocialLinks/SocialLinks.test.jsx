import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import SocialLinks from './SocialLinks';
// test snapshot
test('test snapshot', async () => {
  const tree = renderer.create(
    <Router>
      <SocialLinks />
    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
