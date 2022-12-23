import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import moment from 'moment/moment';
import
{
  render, screen,
} from '@testing-library/react';
import NotificationsBody from './NotificationsBody';
import checkTimeNow from '../../../utils/checkTimeNow';
// render notifications body
it('should render notifications body', () => {
  window.history.pushState({}, '', '/notifications');
  render(<NotificationsBody />);
  expect(screen.getByTestId('notifications-body')).toBeInTheDocument();
});

// check snap shot
it('check snap shot', async () => {
  const tree = renderer.create(<Router><NotificationsBody /></Router>).toJSON();
  expect(tree).toMatchSnapshot();
});

// test time is now or not
describe(' test time is now or not', () => {
  const tests = [{
    time: '2022-11-08T03:32:28.000Z',
    output: false,
  }, {
    time: '2020-07-02T17:32:28.000Z',
    output: false,
  }, {
    time: moment().format(),
    output: true,
  }, {
    time: '2022-11-06T17:32:28.000Z',
    output: false,
  }];
  tests.forEach((item, index) => {
    it(`test case ${index}`, () => {
      const result = checkTimeNow(item.time);
      expect(result).toBe(item.output);
    });
  });
});
