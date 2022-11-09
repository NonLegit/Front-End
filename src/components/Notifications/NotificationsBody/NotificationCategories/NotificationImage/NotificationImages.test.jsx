import {
  render, screen,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import NotificationImages from './NotificationImages';

// check render images
it('render notification images', async () => {
  render(<NotificationImages />);
  expect(screen.getByTestId('notificationImage')).toBeInTheDocument();
});

// check snap shot
it('check snap shot', async () => {
  const tree = renderer.create(<NotificationImages />).toJSON();
  expect(tree).toMatchSnapshot();
});
