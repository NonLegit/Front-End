import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import SwitchPage from './SwitchPage';

test('SwitchPage test snapshot', async () => {
  const tree = renderer.create(
    <SwitchPage />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
