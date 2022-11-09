import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { MemoryRouter as Router } from 'react-router-dom';
import PersonalReddit from './PersonalReddit';

describe(PersonalReddit, () => {
  it('PersonalReddit renders correctly', () => {
    const tree = renderer
      .create(
        <Router>
          <PersonalReddit />
          ,
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
