import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import LeavePopUp from './LeavePopUp';
import Moderators from '../Moderators';

test('test snapshot', async () => {
  const tree = renderer.create(<Router><Moderators><LeavePopUp /></Moderators></Router>).toJSON();
  expect(tree).toMatchSnapshot();
});
