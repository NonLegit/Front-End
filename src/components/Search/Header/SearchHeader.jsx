import { HeaderContainer, Header, MyCategory } from './style';

function SearchHeader() {
  return (
    <HeaderContainer>
      <Header>
        <MyCategory>Posts</MyCategory>
        <MyCategory>Comments</MyCategory>
        <MyCategory>Communities</MyCategory>
        <MyCategory>People</MyCategory>
      </Header>
    </HeaderContainer>
  );
}

export default SearchHeader;
