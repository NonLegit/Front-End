import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CommunityItem from './CommunityItem';

describe(CommunityItem, () => {
  test('Community Item is in the document', () => {
    render(<CommunityItem />);
    const CommunityItemComp = screen.getByTestId('Community Item');
    expect(CommunityItemComp).toBeInTheDocument();
  });

  test('Community Item props work correctly with status up', () => {
    const testCase = {
      index: 2,
      image: 'https://testing-library.com/img/octopus-64x64.png',
      name: 'Community One',
      status: true,
    };

    render(<CommunityItem
      index={testCase.index}
      image={testCase.image}
      name={testCase.name}
      status={testCase.status}
    />);

    const CommunityItemIndex = screen.getByTestId('index');
    expect(parseInt(CommunityItemIndex.textContent, 10)).toEqual(testCase.index);
    const CommunityItemImage = screen.getByTestId('image').firstChild;
    expect(CommunityItemImage.src).toEqual(testCase.image);
    const CommunityItemName = screen.getByTestId('name');
    expect(CommunityItemName.textContent).toEqual(testCase.name);
    const CommunityItemStatusUp = screen.getByTestId('icon up');
    expect(CommunityItemStatusUp).toBeInTheDocument();
    const CommunityItemStatusDown = screen.queryByTestId('icon down');
    expect(CommunityItemStatusDown).not.toBeInTheDocument();
  });
});

test('Community Item props work correctly with status down', () => {
  const testCase = {
    index: 2,
    image: 'https://testing-library.com/img/octopus-64x64.png',
    name: 'Community One',
    status: false,
  };

  render(<CommunityItem
    index={testCase.index}
    image={testCase.image}
    name={testCase.name}
    status={testCase.status}
  />);

  const CommunityItemIndex = screen.getByTestId('index');
  expect(parseInt(CommunityItemIndex.textContent, 10)).toEqual(testCase.index);
  const CommunityItemImage = screen.getByTestId('image').firstChild;
  expect(CommunityItemImage.src).toEqual(testCase.image);
  const CommunityItemName = screen.getByTestId('name');
  expect(CommunityItemName.textContent).toEqual(testCase.name);
  const CommunityItemStatusUp = screen.queryByTestId('icon up');
  expect(CommunityItemStatusUp).not.toBeInTheDocument();
  const CommunityItemStatusDown = screen.getByTestId('icon down');
  expect(CommunityItemStatusDown).toBeInTheDocument();
});
