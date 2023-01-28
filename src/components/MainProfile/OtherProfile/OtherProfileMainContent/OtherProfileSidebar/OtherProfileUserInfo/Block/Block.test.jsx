import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import Block from './Block';

test('test snapshot', async () => {
  const tree = renderer.create(
    <Block />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
