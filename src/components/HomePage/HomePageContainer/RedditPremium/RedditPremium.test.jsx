import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { MemoryRouter as Router } from 'react-router-dom';
import RedditPremium from './RedditPremium';

describe(RedditPremium, () => {
  it('RedditPremium renders correctly', () => {
    const tree = renderer
      .create(
        <Router>
          <RedditPremium />
          ,
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
