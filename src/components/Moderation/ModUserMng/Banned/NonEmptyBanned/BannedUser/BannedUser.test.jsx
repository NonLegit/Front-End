import renderer from 'react-test-renderer';
import BannedUser from './BannedUser';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

test('test snapshot', async () => {
  const tree = renderer.create(
    <BannedUser
      userName="fady"
      profilePicture="users/default.png"
      banDate="2022-12-20T00:53:55.071Z"
      punishType="No Spoiler"
      note="he is bad person"
      punishReason="No reason"
      duration={20}
    />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
