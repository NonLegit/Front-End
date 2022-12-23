import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import UnmutePopUp from './UnmutePopUp';
import MutedUser from '../../NonEmptyMuted/MutedUser/MutedUser';

const user = { userName: 'fady' };
const muteInfo = { muteMessage: 'Spammer' };

test('test snapshot', async () => {
  const tree = renderer.create(<Router><MutedUser user={user} muteInfo={muteInfo}><UnmutePopUp userName={user.userName} /></MutedUser></Router>).toJSON();
  expect(tree).toMatchSnapshot();
});
