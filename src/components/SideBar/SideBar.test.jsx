import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import SideBar from './SideBar';

describe(SideBar, () => {
  it('SideBar renders correctly', () => {
    const tree = renderer
      .create(
        <SideBar width={200}>
          <div>dummy</div>
        </SideBar>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
