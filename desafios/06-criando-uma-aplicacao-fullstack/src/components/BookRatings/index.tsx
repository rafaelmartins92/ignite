import { Text } from '../Typography';
import { UserRatingCard } from '../UserRatingCard';
import { Link } from '../ui/Link';

import { Container } from './styles';

export const BookRatings = () => {
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
        {Array.from({ length: 10 }).map((_, index) => (
          <UserRatingCard
            key={index}
            rating={{
              rate: 2,
              user: {
                name: 'john dow',
                avatar_url: 'https://github.com/rafaelmartins92.png',
              },
              created_at: new Date(),
              description: 'asdhuaiuhdsuih aiuhssiauh uiahauih iuahuaih haih ihauihuaihuihu',
            }}
          />
        ))}
      </section>
    </Container>
  );
};
