import ShallowRenderer from 'react-test-renderer/shallow';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import DraggableMedia from './DraggableMedia';

describe(DraggableMedia, () => {
  // jest.mock('react-dnd', () => ({
  //   ...jest.requireActual('react-dnd'), // use actual for all non-hook parts
  //   useDrag: (p) => ([{ isDragging: p }, 'drag']),
  //   useDrop: (x) => ([{ isOver: x }, 'drop']),
  // }));
  it('DraggableMedia renders correctly', () => {
    const renderer = new ShallowRenderer();
    const tree = renderer
      .render(
        <DndProvider backend={HTML5Backend}>
          <DraggableMedia
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
          />
        </DndProvider>,
      );
    expect(tree).toMatchSnapshot();
  });
});
