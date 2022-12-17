import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import SignUpEmail from './SignUpEmail';

// Already Check on Actions Above
// test snapshot
test('SigUp test snapshot', async () => {
  const tree = renderer.create(<SignUpEmail />).toJSON();
  expect(tree).toMatchSnapshot();
});
