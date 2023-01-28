import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import SnackAlert from './SnackAlert';
// test snapshot
test('test snapshot', async () => {
  const info = {

    info: {
      style: '',
      close: '',
      message: {
        type: '',
      },
    },
  };
  const tree = renderer.create(
    <Router>
      <SnackAlert info={info} />
    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
