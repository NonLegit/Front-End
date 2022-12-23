import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import OtherProfileSidebar from './OtherProfileSidebar';

test('test snapshot', async () => {
  const tree = renderer.create(
    <OtherProfileSidebar />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
