import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import OtherProfilePostFooter from './OtherProfilePostFooter';

test('test snapshot', async () => {
  const tree = renderer.create(<OtherProfilePostFooter />).toJSON();
  expect(tree).toMatchSnapshot();
});
