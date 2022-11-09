import { fireEvent, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import BackToTop from './BackToTop';

describe(BackToTop, () => {
  it('BackToTop renders correctly', () => {
    const tree = renderer
      .create(
        <BackToTop />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('BackToTop works correctly', async () => {
    render(<BackToTop />);
    const backToTopButton = screen.getByTestId('back to top button');
    expect(window.scrollY).toEqual(0);
    await fireEvent.click(backToTopButton);
    expect(window.scrollY).toEqual(0);
  });
});
