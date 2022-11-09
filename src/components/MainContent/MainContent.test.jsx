import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import MainContent from './MainContent';

describe(MainContent, () => {
  it('MainContent renders correctly', () => {
    const tree = renderer
      .create(
        <MainContent width={200}>
          <div>dummy</div>
        </MainContent>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
