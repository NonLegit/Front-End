import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import SuggestionSort from './SuggestionSort';

// test snapshot
test('test snapshot', async () => {
  const tree = renderer.create(<SuggestionSort />).toJSON();
  expect(tree).toMatchSnapshot();
});
