import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import NewFlair from './NewFlair';

// test snapshot
test('test snapshot', async () => {
  const tree = renderer.create(<NewFlair />).toJSON();
  expect(tree).toMatchSnapshot();
});
