import { BookCard } from '../BookCard';
import { Text } from '../Typography';
import { Link } from '../ui/Link';

import { Container } from './styles';

export const PopularBooks = () => {
  return (
    <Container>
      <header>
        <Text size="sm">Popular books</Text>
        <Link href="/explore" text="See all" />
      </header>

      <section>
        {Array.from({ length: 4 }).map((_, i) => (
          <BookCard
            key={`popular-book-${i}`}
            book={{
              author: 'john doe',
              avgRating: 4,
              cover_url: 'https://github.com/rafaelmartins92.png',
              created_at: new Date(),
              id: 'fasdafd',
              name: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde dignissimos magni',
              summary: 'lorem ipsum dolar site amet,',
              total_pages: 100,
            }}
          />
        ))}
      </section>
    </Container>
  );
};
