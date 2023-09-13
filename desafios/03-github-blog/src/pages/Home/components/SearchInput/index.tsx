import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { SearchInputContainer } from './styles';

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInput = z.infer<typeof searchFormSchema>;

interface SearchInputProps {
  postsLength: number;
  getPosts: (query?: string) => Promise<void>;
}

export function SearchInput({ postsLength, getPosts }: SearchInputProps) {
  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchPosts(data: SearchFormInput) {
    await getPosts(data.query);
  }

  return (
    <SearchInputContainer onSubmit={handleSubmit(handleSearchPosts)}>
      <header>
        <h3>Posts</h3>
        <span>{postsLength} posts</span>
      </header>

      <input type="text" placeholder="Search for post" {...register('query')} />
    </SearchInputContainer>
  );
}
