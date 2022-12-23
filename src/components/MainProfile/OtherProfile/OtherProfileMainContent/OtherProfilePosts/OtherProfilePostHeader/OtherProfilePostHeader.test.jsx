import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import OtherProfilePostHeader from './OtherProfilePostHeader';

test('test snapshot', async () => {
  const tree = renderer.create(
    <Router>
      <OtherProfilePostHeader />
    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
