import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import More from './More';

// test snapshot
test('test snapshot', async () => {
  const props = {
    margin: '10px',
    marginLeft: '50px',
  };
  const tree = renderer.create(<More {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
