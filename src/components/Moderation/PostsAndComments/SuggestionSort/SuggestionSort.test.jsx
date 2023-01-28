import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import SuggestionSort from './SuggestionSort';

// test snapshot
const setSuggestedSort = () => {};
test('test snapshot', async () => {
  const props = {
    suggestedSort: 'none',
    setSuggestedSort,
  };
  const tree = renderer.create(<SuggestionSort {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
