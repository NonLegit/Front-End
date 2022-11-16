import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import SignUp from '../SignUp';
import SignUpUsername from './SignUpUsername';

// test snapshot
test('SigUp test snapshot', async () => {
  const tree = renderer.create(<SignUp><SignUpUsername /></SignUp>).toJSON();
  expect(tree).toMatchSnapshot();
});
