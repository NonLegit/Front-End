import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import ThirdParty from './ThirdParty';

// test snapshot
test('test snapshot', async () => {
  const tree = renderer.create(<ThirdParty />).toJSON();
  expect(tree).toMatchSnapshot();
});
