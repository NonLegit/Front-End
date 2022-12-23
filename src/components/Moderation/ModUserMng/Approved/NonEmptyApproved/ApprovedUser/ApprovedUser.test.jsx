import renderer from 'react-test-renderer';
import ApprovedUser from './ApprovedUser';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

test('test snapshot', async () => {
  const tree = renderer.create(
    <ApprovedUser
      title="fady"
      profilePicture="users/default.png"
      joiningDate="2022-12-20T00:53:55.071Z"
    />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
