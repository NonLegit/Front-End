import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { MemoryRouter as Router } from 'react-router-dom';
import HomePageFooter from './HomePageFooter';

describe(HomePageFooter, () => {
  it('HomePageFooter renders correctly', () => {
    const tree = renderer
      .create(
        <Router>
          <HomePageFooter />
          ,
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
