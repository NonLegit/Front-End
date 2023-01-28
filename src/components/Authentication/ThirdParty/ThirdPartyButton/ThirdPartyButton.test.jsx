import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import ThirdPartyButton from './ThirdPartyButton';

// test snapshot
test('ThirdPartyButton-test-snapshot', async () => {
  const tree = renderer.create(<ThirdPartyButton img="google.com" alt="Image Alt" txt="Button Text" />).toJSON();
  expect(tree).toMatchSnapshot();
});
