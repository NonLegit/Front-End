import { useSearchParams } from 'react-router-dom';
import SearchByCommunity from '../components/Search/SearchByCommunity/SearchByCommunity';
import SearchByPosts from '../components/Search/SearchByPosts/SearchByPosts';
import FilterSearch from '../components/Search/Header/Filter';
import Posts from '../components/Search/Posts/Posts';
import {
  TotalHeader, SearchContainer, SearchHeadderContainer,
} from '../components/Search/Header/style';

import SearchByPeople from '../components/Search/SearchByPeople/SearchByPeople';
import SearchByComments from '../components/Search/SearchByComments/SearchByComments';

function Search() {
  const [searchParams] = useSearchParams();
  const type1 = searchParams.get('type') || 'posts';
  const type = type1.toLowerCase();

  // const qery = document.getElementById('nav_search').textContent;
  return (

    <TotalHeader>
      <SearchContainer>
        <SearchHeadderContainer>
          <FilterSearch />
          {type === 'posts'
          && <Posts />}
        </SearchHeadderContainer>

        { type === 'posts'
       && (
       <SearchByPosts q="post" />
       )}

        { type === 'communities'
        && (
          <SearchByCommunity q="al3enb al3enb al3enb" />
        )}

        { type === 'people'
        && (
          <SearchByPeople q="Hosny" />
        )}

        { type === 'comments'
        && (
          <SearchByComments q="ahmed" />
        )}
      </SearchContainer>
    </TotalHeader>

  );
}

export default Search;
