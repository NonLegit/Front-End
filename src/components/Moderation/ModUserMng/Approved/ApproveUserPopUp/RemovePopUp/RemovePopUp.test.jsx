import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import RemovePopUp from './RemovePopUp';
import ApprovedUser from '../../NonEmptyApproved/ApprovedUser/ApprovedUser';

test('test snapshot', async () => {
  const tree = renderer.create(<Router><ApprovedUser><RemovePopUp /></ApprovedUser></Router>).toJSON();
  expect(tree).toMatchSnapshot();
});
