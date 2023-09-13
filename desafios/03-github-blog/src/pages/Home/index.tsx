import { useCallback, useEffect, useState } from 'react';

import { Post } from './components/Post';
import { Profile } from './components/Profile';
import { SearchInput } from './components/SearchInput';
import { Spinner } from '../../components/Spinner';
import { api } from '../../lib/axios';

import { PostsListContainer } from './styles';

const userName = import.meta.env.VITE_GITHUB_USERNAME;
const repositoryName = import.meta.env.VITE_GITHUB_REPOSITORYNAME;

export interface IPost {
  title: string;
  body: string;
  created_at: string;
  number: number;
  html_url: string;
  comments: number;
  user: {
    login: string;
  };
}

export function HomePage() {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [isLoading, setIsLoadings] = useState(true);

  const getPosts = useCallback(
    async (query: string = '') => {
      try {
        setIsLoadings(true);
        const response = await api.get(
          `/search/issues?q=${query}%20label:published%20repo:${userName}/${repositoryName}`
        );

        setPosts(response.data.items);
      } finally {
        setIsLoadings(false);
      }
    },
    []
  );

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <>
      <Profile />
      <SearchInput postsLength={posts.length} getPosts={getPosts} />
      {isLoading ? (
        <Spinner />
      ) : (
        <PostsListContainer>
          {posts.map((post) => (
            <Post key={post.number} post={post} />
          ))}
        </PostsListContainer>
      )}
    </>
  );
}
