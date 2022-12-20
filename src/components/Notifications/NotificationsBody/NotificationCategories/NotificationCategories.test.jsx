import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import NotificationCategories from './NotificationCategories';
import NotificationBody from '../NotificationsBody';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));
// check snap shot
it('check snap shot', async () => {
  const tree = renderer.create(<NotificationBody />, <NotificationCategories />).toJSON();
  expect(tree).toMatchSnapshot();
});
