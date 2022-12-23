import renderer from 'react-test-renderer';
import DraggableMedia from './DraggableMedia';

describe(DraggableMedia, () => {
  it('DraggableMedia renders correctly', () => {
    const tree = renderer
      .create(<DraggableMedia
        media={
            {
              src: 'src',
            }
        }
        id={1}
        mediaSwap={() => (null)}
        activeMediaFile={0}
        setActiveMediaFile={() => (null)}
        mediaDelete={() => (null)}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
