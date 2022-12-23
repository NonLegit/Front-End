import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import NewFlair from './NewFlair';

// test snapshot
const save = () => {};
const cancel = () => {};
test('test snapshot', async () => {
  const props = {
    save,
    cancel,
  };
  const tree = renderer.create(<NewFlair {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
