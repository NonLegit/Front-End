import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Categories from './Categories';

test('test snapshot', async () => {
  const props = {
    allCategories: [
      { id: 1, text: 'Sports', pic: 'https://www.redditstatic.com/desktop2x/img/leaderboard/banner-background.png' },
      { id: 2, text: 'Gaming', pic: 'https://www.redditstatic.com/desktop2x/img/leaderboard/banner-background.png' },
    ],
  };

  const tree = renderer.create(
    <Router>
      <Categories {...props} />
    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
