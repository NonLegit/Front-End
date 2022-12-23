import '@testing-library/jest-dom';
import ShallowRenderer from 'react-test-renderer/shallow';
import OtherProfileSidebar from './OtherProfileSidebar';

test('test snapshot', async () => {
  const renderer = new ShallowRenderer();

  const tree = renderer.render(
    <OtherProfileSidebar />,
  );
  expect(tree).toMatchSnapshot();
});
