import {
  render, screen,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter as Router } from 'react-router-dom';
import Communities from './Communities';

describe(Communities, () => {
  test('Communities is in the document', () => {
    const communities = [];
    render(
      <Router>
        <Communities communities={communities} />
      </Router>,
    );
    const CommunitiesComp = screen.getByTestId('Communities');
    expect(CommunitiesComp).toBeInTheDocument();
  });

  test('Communities props works correctly', () => {
    const communities = [];
    render(
      <Router>
        <Communities communities={communities} />
      </Router>,
    );
    const communitiesTitle = screen.getByTestId('communities title');
    expect(communitiesTitle.textContent).toEqual('communities near you');
  });
});
