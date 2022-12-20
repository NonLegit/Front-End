import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import PersonalReddit from './PersonalReddit';

// test snapshot
test('test snapshot', async () => {
  const tree = renderer.create(<PersonalReddit />).toJSON();
  expect(tree).toMatchSnapshot();
});
