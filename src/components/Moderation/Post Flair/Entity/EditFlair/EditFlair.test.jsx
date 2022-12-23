import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import Edit from './Edit';

// test snapshot
const save = () => {};
const cancel = () => {};
test('test snapshot', async () => {
  const props = {
    flair: {
      text: 'aaa',
    },
    save,
    cancel,
  };
  const tree = renderer.create(<Edit {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
