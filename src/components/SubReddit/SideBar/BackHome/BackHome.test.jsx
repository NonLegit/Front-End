import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import BackHome from './BackHome';

// test snapshot
test('test snapshot', async () => {
  const tree = renderer.create(<BackHome />).toJSON();
  expect(tree).toMatchSnapshot();
});
