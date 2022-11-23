import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import numFormatter from '../../../utils/MembersNum';

import SideBar from './SideBar';

// test snapshot
test('test snapshot', async () => {
  const tree = renderer.create(<SideBar />).toJSON();
  expect(tree).toMatchSnapshot();
});

// test Number Formatter
describe(' test Number Formatter', () => {
  const tests = [{
    num: 1000000,
    output: '100K',
  },
  {
    num: 10000000,
    output: '1M',
  }, {
    num: 10,
    output: 10,
  }];
  tests.forEach((item, index) => {
    it(`test case ${index}`, () => {
      const result = numFormatter(item.num);
      // console.log('nour basma eslam madbouly ', result);
      expect(result).toBe(item.output);
    });
  });
});
