import { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import {
  Header, HeaderContainer, MyCategory,
} from './style';

function useQuery() {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
}

/**
 * filter Search by its type
 *
 * @component FilterSearch
 * @property  {function} handleClick navigate

 * @returns {React.Component} filter Search by its type
 */
function FilterSearch() {
  const query = useQuery();
  const type = query.get('type') || 'Posts';
  const navigate = useNavigate();

  // navigate
  const handleClick = (subPage) => {
    navigate(`?type=${subPage}`);
  };

  return (
    <HeaderContainer>
      <Header>
        <MyCategory
          condition={(type === 'Posts').toString()}
          onClick={() => { handleClick('Posts'); console.log((type === 'Posts').toString()); }}
        >
          Posts
        </MyCategory>
        <MyCategory
          condition={(type === 'Comments').toString()}
          onClick={() => { handleClick('Comments'); }}
        >
          Comments
        </MyCategory>
        <MyCategory
          condition={(type === 'Communities').toString()}
          onClick={() => { handleClick('Communities'); }}
        >
          Communities
        </MyCategory>
        <MyCategory
          condition={(type === 'People').toString()}
          onClick={() => { handleClick('People'); }}
        >
          People
        </MyCategory>
      </Header>
    </HeaderContainer>
  );
}

export default FilterSearch;
