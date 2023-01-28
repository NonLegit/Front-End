import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import Rules from './Rules';

// test snapshot
test('test snapshot', async () => {
  const props = {
    Name: 'aaaa',
    rules: [{
      title: '123',
      description: '',
    }],
  };
  const tree = renderer.create(<Rules {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
