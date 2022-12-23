import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import ForgetUsername from './ForgetUsername';

// test snapshot
test('ForgetUsername-test-snapshot', async () => {
  const tree = renderer.create(<ForgetUsername />).toJSON();
  expect(tree).toMatchSnapshot();
});
