import ShallowRenderer from 'react-test-renderer/shallow';
import DraggableMedia from './DraggableMedia';

describe(DraggableMedia, () => {
  jest.mock('react-dnd', () => ({
    ...jest.requireActual('react-dnd'), // use actual for all non-hook parts
    useDrag: () => ([{ isDragging: 'isDragging' }, 'drag']),
    useDrop: () => ([{ isOver: 'isOver' }, 'drop']),
  }));
  it('DraggableMedia renders correctly', () => {
    const renderer = new ShallowRenderer();
    const tree = renderer
      .render(<DraggableMedia
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
      />);
    expect(tree).toMatchSnapshot();
  });
});
