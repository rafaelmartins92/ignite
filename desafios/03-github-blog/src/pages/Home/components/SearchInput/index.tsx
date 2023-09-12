import { SearchInputContainer } from './styles';

export function SearchInput() {
  return (
    <SearchInputContainer>
      <header>
        <h3>Posts</h3>
        <span>6 posts</span>
      </header>

      <input type="text" placeholder="Search for post" />
    </SearchInputContainer>
  );
}
