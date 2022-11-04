import { render } from '@testing-library/react';
import LogIn from './LogIn';

describe(LogIn, () => {
  // test1
  it('counter display correct intial count', () => {
    const { getByTestId } = render(<LogIn initalcount={0} />);
    const countvalue = Number(getByTestId('count').textContent);
    expect(countvalue).toEqual(0);
  });
});
