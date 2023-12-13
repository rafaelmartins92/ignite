import { useSession } from 'next-auth/react';
import { ChartLineUp } from '@phosphor-icons/react';
import { useQuery } from '@tanstack/react-query';
import { api } from '@/lib/axios';

import { PageTitle } from '../ui/PageTitle';
import { Link } from '../ui/Link';
import { Text } from '../Typography';
import { RatingCard, RatingWithAuthorAndBook } from '../RatingCard';

import { Container, LatestContainer } from './styles';

export const LatestRatings = () => {
  const { data: ratings } = useQuery<RatingWithAuthorAndBook[]>(['latest-ratings'], async () => {
    const { data } = await api.get('/ratings/latest');
    return data?.ratings ?? [];
  });

  const { data: session } = useSession();

  const userId = session?.user?.id;

  const { data: latestUserRating } = useQuery(
    ['latest-user-rating', userId],
    async () => {
      const { data } = await api.get('/ratings/user-latest');
      return data?.rating ?? null;
    },
    {
      enabled: !!userId,
    }
  );

  return (
    <Container>
      <PageTitle title="Home" icon={<ChartLineUp size={32} />} css={{ marginBottom: 40 }} />

      {latestUserRating && (
        <LatestContainer>
          <header>
            <Text size="sm">Your last review</Text>
            <Link text="See all" href={`/profile/${userId}`} />
          </header>

          <RatingCard rating={latestUserRating} variant="compact" />
        </LatestContainer>
      )}

      <Text size="sm">Latest ratings</Text>

      <section>
        {ratings?.map((rating) => (
          <RatingCard key={rating.id} rating={rating} />
        ))}
      </section>
    </Container>
  );
};
