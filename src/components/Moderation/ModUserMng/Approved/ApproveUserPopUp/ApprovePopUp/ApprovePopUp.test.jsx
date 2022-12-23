import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import ApprovePopUp from './ApprovePopUp';
import Approve from '../../ApproveUser';

test('test snapshot', async () => {
  const tree = renderer.create(<Router><Approve><ApprovePopUp /></Approve></Router>).toJSON();
  expect(tree).toMatchSnapshot();
});
