import { useState } from 'react';
import { Link } from '../ui/Link';
import { Text } from '../Typography';
import { RatingWithAuthor, UserRatingCard } from '../UserRatingCard';
import { RatingForm } from '../RatingForm';

import { Container } from './styles';

type BookRatingsProps = {
  ratings: RatingWithAuthor[];
  bookId: string;
};
export const BookRatings = ({ ratings, bookId }: BookRatingsProps) => {
  const [showForm, setShowForm] = useState(false);

  const handleRate = () => {
    setShowForm(true);
  };

  const sortedRatingsByDate = ratings.sort((a, b) => {
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
  });

  return (
    <Container>
      <header>
        <Text>Ratings</Text>
        <Link text="Rate" withoutIcon onClick={handleRate} />
      </header>

      <section>
        {showForm && <RatingForm bookId={bookId} onCancel={() => setShowForm(false)} />}
        {sortedRatingsByDate.map((rating) => (
          <UserRatingCard key={rating.id} rating={rating} />
        ))}
      </section>
    </Container>
  );
};
