import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import UnmutePopUp from './UnmutePopUp';
import MutedUser from '../../NonEmptyMuted/MutedUser/MutedUser';

test('test snapshot', async () => {
  const tree = renderer.create(<Router><MutedUser><UnmutePopUp userName="fady" /></MutedUser></Router>).toJSON();
  expect(tree).toMatchSnapshot();
});
