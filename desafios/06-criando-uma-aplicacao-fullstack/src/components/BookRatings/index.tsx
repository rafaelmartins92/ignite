import { Text } from '../Typography';
import { RatingWithAuthor, UserRatingCard } from '../UserRatingCard';
import { Link } from '../ui/Link';

import { Container } from './styles';

type BookRatingsProps = {
  ratings: RatingWithAuthor[];
};
export const BookRatings = ({ ratings }: BookRatingsProps) => {
  const handleRate = () => {
    console.log('avaliar');
  };

  return (
    <Container>
      <header>
        <Text>Ratings</Text>
        <Link text="Rate" withoutIcon onClick={handleRate} />
      </header>

      <section>
        {ratings.map((rating) => (
          <UserRatingCard key={rating.id} rating={rating} />
        ))}
      </section>
    </Container>
  );
};
