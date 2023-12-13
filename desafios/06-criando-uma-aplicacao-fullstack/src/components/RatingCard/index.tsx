import Link from 'next/link';
import { Book, Rating, User } from '@prisma/client';
import { getRelativeTimeString } from '@/utils/getRelativeTimeString';
import { useToggleShowMore } from '@/hooks/useToggleShowMore';
import { Avatar } from '../ui/Avatar';
import { Heading, Text } from '../Typography';
import { RatingStars } from '../RatingStars';

import {
  BookContent,
  BookDetails,
  BookImage,
  CompactDetails,
  Container,
  ToggleShowMoreButton,
  UserDetails,
} from './styles';

export type RatingWithAuthorAndBook = Rating & {
  user: User;
  book: Book;
};

type RatingCardProps = {
  rating: RatingWithAuthorAndBook;
  variant?: 'default' | 'compact';
};

const MAX_SUMMARY_LENGHT = 180;

export const RatingCard = ({ rating, variant = 'default' }: RatingCardProps) => {
  const distance = getRelativeTimeString(new Date(rating.created_at), 'en');

  const {
    text: bookSummary,
    toggleShowMore,
    isShowingMore,
  } = useToggleShowMore(rating.book.summary, MAX_SUMMARY_LENGHT);

  return (
    <Container variant={variant}>
      {variant === 'default' && (
        <UserDetails>
          <section>
            <Link href={`/profile/${rating.user_id}`}>
              <Avatar src={rating.user.avatar_url!} alt={rating.user.name} />
            </Link>
            <div>
              <Text>{rating.user.name}</Text>
              <Text size="sm" color="gray-400">
                {distance}
              </Text>
            </div>
          </section>

          <RatingStars rating={rating.rate} />
        </UserDetails>
      )}

      <BookDetails>
        <Link href={`/explore?book=${rating.book_id}`}>
          <BookImage width={108} height={152} alt={rating.book.name} src={rating.book.cover_url} />
        </Link>

        <BookContent>
          <div>
            {variant === 'compact' && (
              <CompactDetails>
                <Text size="sm" color="gray-300">
                  {distance}
                </Text>
                <RatingStars rating={rating.rate} />
              </CompactDetails>
            )}
            <Heading size="xs">{rating.book.name}</Heading>
            <Text size="sm" color="gray-400">
              {rating.book.author}
            </Text>
          </div>

          <Text size="sm" color="gray-300" css={{ marginTop: '$5' }}>
            {bookSummary}
            {rating.book.summary.length > MAX_SUMMARY_LENGHT && (
              <ToggleShowMoreButton onClick={toggleShowMore}>
                {isShowingMore ? 'see less' : 'see more'}
              </ToggleShowMoreButton>
            )}
          </Text>
        </BookContent>
      </BookDetails>
    </Container>
  );
};
