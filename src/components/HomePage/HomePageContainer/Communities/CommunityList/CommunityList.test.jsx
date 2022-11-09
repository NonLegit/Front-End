import {
  render, screen,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter as Router } from 'react-router-dom';
import CommunityList from './CommunityList';

describe(CommunityList, () => {
  test('CommunityList is in the document', () => {
    const communitiesList = [];
    render(
      <Router>
        <CommunityList communitiesList={communitiesList} />
      </Router>,
    );
    const CommunityListComp = screen.getByTestId('community list');
    expect(CommunityListComp).toBeInTheDocument();
  });
});
