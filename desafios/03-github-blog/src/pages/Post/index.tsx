import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { PostHeader } from './components/PostHeader';
import { PostContent } from './components/PostContent';
import { IPost } from '../Home';
import { api } from '../../lib/axios';

const userName = import.meta.env.VITE_GITHUB_USERNAME;
const repositoryName = import.meta.env.VITE_GITHUB_REPOSITORYNAME;

export function PostPage() {
  const [postData, setPostData] = useState<IPost>({} as IPost);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  const getPostDetails = useCallback(async () => {
    try {
      setIsLoading(true);

      const response = await api.get(
        `/repos/${userName}/${repositoryName}/issues/${id}`
      );

      setPostData(response.data);
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    getPostDetails();
  }, [getPostDetails]);

  return (
    <>
      <PostHeader postData={postData} isLoading={isLoading} />
      {!isLoading && <PostContent content={postData.body} />}
    </>
  );
}
