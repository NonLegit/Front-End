import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import numFormatter from '../../../utils/MembersNum';
import SideBar from './SideBar';

// test snapshot
test('test snapshot', async () => {
  const props = {
    Name: 'aaaa',
    topics: [],
    primaryTopic: 'aaaa',
    createdAt: '',
    moderatoesName: [],
    username: 'aaa',
    members: 500,
    rules: [],
    createPost: false,
    disc: 'aaaaaa',
  };
  const tree = renderer.create(
    <Router>
      <SideBar {...props} />
    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

// test Number Formatter
describe(' test Number Formatter', () => {
  const tests = [{
    num: 100000,
    output: '100.0K',
  },
  {
    num: 10000000,
    output: '10.0M',
  }, {
    num: 10,
    output: 10,
  }];
  tests.forEach((item, index) => {
    it(`test case ${index}`, () => {
      const result = numFormatter(item.num);
      // console.log('nour basma eslam madbouly ', result);
      expect(result).toEqual(item.output);
    });
  });
});
