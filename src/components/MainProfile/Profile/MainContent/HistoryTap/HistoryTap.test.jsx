import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import HistoryTap from './HistoryTap';

test('test snapshot', async () => {
  const tree = renderer.create(
    <HistoryTap />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
