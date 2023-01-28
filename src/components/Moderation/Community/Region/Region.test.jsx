import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import Region from './Region';

// test snapshot
test('test snapshot', async () => {
  const Location = 'aaa';
  const tree = renderer.create(<Region {...Location} />).toJSON();
  expect(tree).toMatchSnapshot();
});
