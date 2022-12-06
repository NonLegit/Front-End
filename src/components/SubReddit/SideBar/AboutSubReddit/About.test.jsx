import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import {
  fireEvent,
  render, screen,
} from '@testing-library/react';
import About from './About';

it('open form', async () => {
  render(<About />);
  const sort = screen.getByTestId('sort');
  fireEvent.click(sort);
  const items = screen.getByTestId('items');
  expect(items).toBeInTheDocument();
});

// test snapshot
test('test snapshot', async () => {
  const tree = renderer.create(<About />).toJSON();
  expect(tree).toMatchSnapshot();
});
