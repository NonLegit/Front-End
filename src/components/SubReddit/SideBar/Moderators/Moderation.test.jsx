import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Moderators from './Moderators';
// test snapshot
test('test snapshot', async () => {
  const props = {
    moderatoesName: ['aa', 'bb'],
  };
  const tree = renderer.create(
    <Router>
      <Moderators {...props} />
    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
