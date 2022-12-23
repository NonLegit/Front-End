import '@testing-library/jest-dom';
import moment from 'moment/moment';
import checkTimeNow from './checkTimeNow';
// test time is now or not
describe(' test time is now or not', () => {
  const tests = [{
    time: '2022-11-08T03:32:28.000Z',
    output: false,
  }, {
    time: '2019-07-02T17:32:28.000Z',
    output: false,
  }, {
    time: '2020-07-02T17:32:28.000Z',
    output: false,
  }, {
    time: '2005-07-02T17:32:28.000Z',
    output: false,
  }, {
    time: '2007-07-02T17:32:28.000Z',
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
