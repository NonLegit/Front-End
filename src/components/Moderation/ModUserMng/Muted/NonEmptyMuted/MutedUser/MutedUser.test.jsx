import renderer from 'react-test-renderer';
import MutedUser from './MutedUser';

const muteInfo = JSON.parse('{"muteInfo": {"muteMessage": "Spammer"}}');
const user = JSON.parse(`{"user": {
  "_id": "63a107a3e72289e28e6b760d",
  "userName": "Nour",
  "joinDate": "2022-12-20T00:53:55.071Z",
  "profilePicture": "users/default.png"
}}`);

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

test('test snapshot', async () => {
  const tree = renderer.create(<MutedUser user={user} muteInfo={muteInfo} />).toJSON();
  expect(tree).toMatchSnapshot();
});
