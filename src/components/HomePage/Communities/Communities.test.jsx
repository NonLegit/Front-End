import {
  render, screen,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter as Router } from 'react-router-dom';
import Communities from './Communities';

describe(Communities, () => {
  test('Communities is in the document', () => {
    const communitiesData = {
      communitiesTitle: 'communities near you',
      communitiesList: [],
    };
    render(
      <Router>
        <Communities communitiesData={communitiesData} />
      </Router>,
    );
    const CommunitiesComp = screen.getByTestId('Communities');
    expect(CommunitiesComp).toBeInTheDocument();
  });

  test('Communities props works correctly', () => {
    const communitiesData = {
      communitiesTitle: 'communities near you',
      communitiesList: [],
    };
    render(
      <Router>
        <Communities communitiesData={communitiesData} />
      </Router>,
    );
    const communitiesTitle = screen.getByTestId('communities title');
    expect(communitiesTitle.textContent).toEqual(communitiesData.communitiesTitle);
  });
});
