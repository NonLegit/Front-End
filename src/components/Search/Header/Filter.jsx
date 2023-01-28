import { useNavigate, useSearchParams } from 'react-router-dom';

import {
  Header, HeaderContainer, MyCategory,
} from './style';

/**
 * filter Search by its type
 *
 * @component FilterSearch
 * @property  {function} handleClick navigate

 * @returns {React.Component} filter Search by its type
 */
function FilterSearch() {
  const [searchParams] = useSearchParams();

  const type1 = searchParams.get('type') || 'posts';
  const type = type1.toLowerCase();

  const qery = searchParams.get('q');

  const navigate = useNavigate();

  // navigate
  const handleClick = (subPage) => {
    navigate(`?q=${qery}&type=${subPage}`);
  };

  return (
    <HeaderContainer>
      <Header>
        <MyCategory
          condition={(type === 'posts').toString()}
          onClick={() => { handleClick('posts'); console.log((type === 'posts').toString()); }}
        >
          Posts
        </MyCategory>
        <MyCategory
          condition={(type === 'comments').toString()}
          onClick={() => { handleClick('comments'); }}
        >
          Comments
        </MyCategory>
        <MyCategory
          condition={(type === 'communities').toString()}
          onClick={() => { handleClick('communities'); }}
        >
          Communities
        </MyCategory>
        <MyCategory
          condition={(type === 'people').toString()}
          onClick={() => { handleClick('people'); }}
        >
          People
        </MyCategory>
      </Header>
    </HeaderContainer>
  );
}

export default FilterSearch;
