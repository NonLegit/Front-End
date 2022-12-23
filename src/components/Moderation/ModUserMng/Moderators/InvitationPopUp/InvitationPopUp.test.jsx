import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import InvitationPopUp from './InvitationPopUp';
import Moderators from '../Moderators';

test('test snapshot', async () => {
  const tree = renderer.create(<Router><Moderators><InvitationPopUp /></Moderators></Router>).toJSON();
  expect(tree).toMatchSnapshot();
});
