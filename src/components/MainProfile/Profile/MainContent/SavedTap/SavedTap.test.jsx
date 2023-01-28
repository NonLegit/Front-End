import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ShallowRenderer from 'react-test-renderer/shallow';
import MainProfile from '../../../MainProfile';
import ListingContextProvider from '../../../../../contexts/ListingContext';
import SavedTap from './SavedTap';
import mergeSort from '../../../../../utils/mergeSort';

test('test snapshot', async () => {
  const renderer = new ShallowRenderer();

  const tree = renderer.render(
    <Router>
      <ListingContextProvider>
        <MainProfile>
          <SavedTap />
        </MainProfile>
      </ListingContextProvider>
    </Router>,
  );
  expect(tree).toMatchSnapshot();
});

test('merge sort on hot', () => {
  const arr1 = [
    {
      _id: 0, sortOnHot: 2, votes: 999, createdAt: '2022-07-21T17:32:28.000Z',
    },
    {
      _id: 1, sortOnHot: 9, votes: 10, createdAt: '2021-07-21T17:32:28.000Z',
    },
    {
      _id: 2, sortOnHot: 4, votes: 50, createdAt: '2022-07-5T17:32:28.000Z',
    },
  ];
  const arr2 = [
    {
      _id: 3, sortOnHot: 10, votes: 39, createdAt: '2015-08-21T17:32:28.000Z',
    },
    {
      _id: 4, sortOnHot: 5, votes: 15, createdAt: '2022-07-17T17:32:28.000Z',
    },
    {
      _id: 5, sortOnHot: 1, votes: 87, createdAt: '2021-07-226T17:32:28.000Z',
    },
  ];
  const arr3 = [
    {
      _id: 3, sortOnHot: 10, votes: 39, createdAt: '2015-08-21T17:32:28.000Z',
    },
    {
      _id: 1, sortOnHot: 9, votes: 10, createdAt: '2021-07-21T17:32:28.000Z',
    },
    {
      _id: 4, sortOnHot: 5, votes: 15, createdAt: '2022-07-17T17:32:28.000Z',
    },
    {
      _id: 2, sortOnHot: 4, votes: 50, createdAt: '2022-07-5T17:32:28.000Z',
    },
    {
      _id: 0, sortOnHot: 2, votes: 999, createdAt: '2022-07-21T17:32:28.000Z',
    },
    {
      _id: 5, sortOnHot: 1, votes: 87, createdAt: '2021-07-226T17:32:28.000Z',
    },
  ];
  expect(mergeSort(arr1, arr2, 'hot')).toEqual(arr3);
});

test('merge sort on top', () => {
  const arr1 = [
    {
      _id: 0, sortOnHot: 2, votes: 999, createdAt: '2022-07-21T17:32:28.000Z',
    },
    {
      _id: 1, sortOnHot: 9, votes: 10, createdAt: '2021-07-21T17:32:28.000Z',
    },
    {
      _id: 2, sortOnHot: 4, votes: 50, createdAt: '2022-07-5T17:32:28.000Z',
    },
  ];
  const arr2 = [
    {
      _id: 3, sortOnHot: 10, votes: 39, createdAt: '2015-08-21T17:32:28.000Z',
    },
    {
      _id: 4, sortOnHot: 5, votes: 15, createdAt: '2022-07-17T17:32:28.000Z',
    },
    {
      _id: 5, sortOnHot: 1, votes: 87, createdAt: '2021-07-226T17:32:28.000Z',
    },
  ];
  const arr3 = [
    {
      _id: 0, sortOnHot: 2, votes: 999, createdAt: '2022-07-21T17:32:28.000Z',
    },
    {
      _id: 5, sortOnHot: 1, votes: 87, createdAt: '2021-07-226T17:32:28.000Z',
    },
    {
      _id: 2, sortOnHot: 4, votes: 50, createdAt: '2022-07-5T17:32:28.000Z',
    },
    {
      _id: 3, sortOnHot: 10, votes: 39, createdAt: '2015-08-21T17:32:28.000Z',
    },
    {
      _id: 4, sortOnHot: 5, votes: 15, createdAt: '2022-07-17T17:32:28.000Z',
    },
    {
      _id: 1, sortOnHot: 9, votes: 10, createdAt: '2021-07-21T17:32:28.000Z',
    },

  ];
  expect(mergeSort(arr1, arr2, 'top')).toEqual(arr3);
});

test('merge sort on time', () => {
  const arr1 = [
    {
      _id: 0, sortOnHot: 2, votes: 999, createdAt: '2022-07-21T17:32:28.000Z',
    },
    {
      _id: 1, sortOnHot: 9, votes: 10, createdAt: '2021-07-21T17:32:28.000Z',
    },
    {
      _id: 2, sortOnHot: 4, votes: 50, createdAt: '2022-07-05T17:32:28.000Z',
    },
  ];
  const arr2 = [
    {
      _id: 3, sortOnHot: 10, votes: 39, createdAt: '2015-08-21T17:32:28.000Z',
    },
    {
      _id: 4, sortOnHot: 5, votes: 15, createdAt: '2022-07-17T17:32:28.000Z',
    },
    {
      _id: 5, sortOnHot: 1, votes: 87, createdAt: '2021-07-26T17:32:28.000Z',
    },
  ];
  const arr3 = [
    {
      _id: 0, sortOnHot: 2, votes: 999, createdAt: '2022-07-21T17:32:28.000Z',
    },
    {
      _id: 4, sortOnHot: 5, votes: 15, createdAt: '2022-07-17T17:32:28.000Z',
    },
    {
      _id: 2, sortOnHot: 4, votes: 50, createdAt: '2022-07-05T17:32:28.000Z',
    },
    {
      _id: 5, sortOnHot: 1, votes: 87, createdAt: '2021-07-26T17:32:28.000Z',
    },
    {
      _id: 1, sortOnHot: 9, votes: 10, createdAt: '2021-07-21T17:32:28.000Z',
    },
    {
      _id: 3, sortOnHot: 10, votes: 39, createdAt: '2015-08-21T17:32:28.000Z',
    },

  ];
  expect(mergeSort(arr1, arr2, '')).toEqual(arr3);
});
