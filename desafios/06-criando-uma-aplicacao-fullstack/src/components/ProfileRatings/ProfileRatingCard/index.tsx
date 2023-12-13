import Link from 'next/link';
import { Heading, Text } from '@/components/Typography';
import { getRelativeTimeString } from '@/utils/getRelativeTimeString';
import { RatingStars } from '@/components/RatingStars';

import { ProfileRating } from '..';

import { BookDetails, BookImage, CardContent, Container } from './styles';

type ProfileRatingCardProps = {
  rating: ProfileRating;
};

export const ProfileRatingCard = ({ rating }: ProfileRatingCardProps) => {
  const distance = getRelativeTimeString(new Date(rating.created_at), 'en');
  
  return (
    <Container>
      <Text size="sm" color="gray-300">
        {distance}
      </Text>

      <CardContent>
        <BookDetails>
          <Link style={{ display: 'flex' }} href={`/explore?book=${rating.book_id}`}>
            <BookImage src={rating.book.cover_url} alt={rating.book.name} width={98} height={134} />
          </Link>
          <section>
            <div>
              <Heading size="sm">{rating.book.name}</Heading>
              <Text size="sm" color="gray-400">
                {rating.book.author}
              </Text>
            </div>

            <RatingStars rating={rating.rate} />
          </section>
        </BookDetails>

        <Text size="sm" color="gray-300">
          {rating.description}
        </Text>
      </CardContent>
    </Container>
  );
};
