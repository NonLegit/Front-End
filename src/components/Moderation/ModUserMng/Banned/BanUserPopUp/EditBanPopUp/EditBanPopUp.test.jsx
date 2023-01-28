import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import EditBanPopUp from './EditBanPopUp';
import BannedUser from '../../NonEmptyBanned/BannedUser/BannedUser';

test('test snapshot', async () => {
  const tree = renderer.create(<Router><BannedUser><EditBanPopUp /></BannedUser></Router>).toJSON();
  expect(tree).toMatchSnapshot();
});
