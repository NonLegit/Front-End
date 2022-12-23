import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import FooterQueue from './FooterQueue';

test('FooterQueue test snapshot', async () => {
  const tree = renderer.create(
    <FooterQueue />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
