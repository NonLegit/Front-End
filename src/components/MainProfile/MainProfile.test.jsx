import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import MainProfile from './MainProfile';

test('test snapshot', async () => {
  const tree = renderer.create(
    <MainProfile />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
