import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import {
  fireEvent,
  render, screen,
} from '@testing-library/react';
import FilterArray from '../../../../../utils/FilterArray';
import KeyDown from '../../../../../utils/KeyDown';
import AddList from './AddList';

it('open input to add disc', async () => {
  // window.history.pushState({}, '', '/Login');
  render(<AddList />);
  const add = screen.getByTestId('add');
  fireEvent.click(add);
  const input = screen.getByTestId('input');
  expect(input).toBeInTheDocument();
});

// test snapshot
test('test snapshot', async () => {
  const tree = renderer.create(<AddList />).toJSON();
  expect(tree).toMatchSnapshot();
});

// test KeyDown
describe(' test KeyDown', () => {
  const tests = [{
    arr: ['a', 'b', 'c'],
    output: false,
  },
  {
    arr: ['a', 'b'],
    output: true,
  }];
  tests.forEach((item, index) => {
    it(`test case ${index}`, () => {
      const result = KeyDown(item.arr, 'c');
      expect(result).toBe(item.output);
    });
  });
});

// test filter arry
describe(' test filter array', () => {
  const tests = [{
    arr: ['a', 'b', 'c'],
    output: ['a', 'b'],
  }];
  tests.forEach((item, index) => {
    it(`test case ${index}`, () => {
      const result = FilterArray(item.arr, 2);
      console.log('nour basma eslam madbouly ', result);
      expect(result).toEqual(item.output);
    });
  });
});
