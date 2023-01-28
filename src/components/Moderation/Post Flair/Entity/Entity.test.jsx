import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import Entity from './Entity';

// test snapshot
const handleClick = () => {};
const trueCan = () => {};
test('test snapshot', async () => {
  const props = {
    row: [],
    can: true,
    handleClick,
    trueCan,
  };
  const tree = renderer.create(<Entity {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
