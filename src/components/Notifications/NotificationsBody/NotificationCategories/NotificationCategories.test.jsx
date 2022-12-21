import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';

import NotificationCategories from './NotificationCategories';
import NotificationBody from '../NotificationsBody';

// check snap shot
it('check snap shot', async () => {
  const tree = renderer.create(<NotificationBody />, <NotificationCategories />).toJSON();
  expect(tree).toMatchSnapshot();
});
