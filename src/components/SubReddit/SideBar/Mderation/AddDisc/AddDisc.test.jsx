import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import {
  fireEvent,
  render, screen,
} from '@testing-library/react';
import AddSector from './Add';
import EmptyStr from '../../../../../utils/EmptyStr';

it('open input to add disc', async () => {
  // window.history.pushState({}, '', '/Login');
  render(<AddSector />);
  const add = screen.getByTestId('add');
  fireEvent.click(add);
  const input = screen.getByTestId('input');
  expect(input).toBeInTheDocument();
});

// test snapshot
test('test snapshot', async () => {
  const props = {
    Name: 'aaaa',
    disc2: 'aaaaaa',
  };
  const tree = renderer.create(<AddSector {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

// test string empty or not
describe(' test string empty or not', () => {
  const tests = [{
    str: 'aaaa',
    output: false,
  }, {
    str: ' ',
    output: true,
  }, {
    str: '',
    output: true,
  }];
  tests.forEach((item, index) => {
    it(`test case ${index}`, () => {
      const result = EmptyStr(item.str?.trim());
      expect(result).toBe(item.output);
    });
  });
});
