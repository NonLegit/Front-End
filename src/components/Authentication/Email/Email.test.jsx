import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import Email from './Email';

// test snapshot
test('test snapshot', async () => {
  const tree = renderer.create(<Email />).toJSON();
  expect(tree).toMatchSnapshot();
});
