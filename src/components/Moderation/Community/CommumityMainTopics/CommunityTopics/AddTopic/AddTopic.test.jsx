import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import AddTopic from './AddTopic';

// test snapshot
const removeItem = () => {};
const handleChange = () => {};
const handleKeyDown = () => {};
const trueShawList = () => {};

test('test snapshot', async () => {
  const props = {
    tempString: [],
    removeItem,
    handleChange,
    handleKeyDown,
    trueShawList,
  };
  const tree = renderer.create(<AddTopic {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
