import { ChartLineUp } from '@phosphor-icons/react';

import { PageTitle } from '../ui/PageTitle';
import { Text } from '../Typography';
import { RatingCard } from '../RatingCard';

import { Container } from './styles';

export const LatestRatings = () => {
  return (
    <Container>
      <PageTitle title="Home" icon={<ChartLineUp size={32} />} css={{ marginBottom: 40 }} />

      <Text size="sm">Latest ratings</Text>

      <section>
        {Array.from({ length: 20 }).map((_, i) => (
          <RatingCard
            key={i}
            rating={{
              id: 'aa',
              rate: 4,
              user: {
                name: 'John doe',
                avatar_url: 'https://avatars.githubusercontent.com/u/61281655?v=4',
                email: 'email@email.com',
                id: 'asdasdasd',
                created_at: new Date(),
              },
              book: {
                author: 'JohnDoe',
                cover_url: 'https://avatars.githubusercontent.com/u/61281655?v=4',
                id: 'sdasd',
                name: 'johdn dow',
                summary: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde dignissimos magni, ex nemo deleniti iste dolor velit aliquid similique, cumque quam totam facere est impedit. Fuga quos odio ipsum quia optio enim magni est quis culpa aperiam soluta porro dolor nulla veritatis voluptas architecto consequatur odit, eos voluptatem iste, ratione non neque sapiente. Enim animi odio ad quam nesciunt, laboriosam laudantium unde quas sit, hic cum culpa necessitatibus ea error! Magni non culpa voluptate, ex officia, autem vero in tempore magnam quis et distinctio sed vitae, dolores blanditiis tempora. Debitis deserunt aperiam accusamus odio assumenda, voluptatum minus laboriosam laudantium omnis rerum molestias possimus cum suscipit magni voluptas eligendi? Labore dolor ipsa praesentium aut! Mollitia sapiente quisquam deleniti consequuntur quam rem repellendus. Commodi voluptate dolor delectus tempore repellat voluptas, neque nulla accusamus repudiandae rem sed error debitis id repellendus nobis quasi sunt iusto maiores ex mollitia perferendis et expedita! Ducimus dolore soluta, aliquam voluptatibus iure eum sed. Ut quo quaerat iste quos iusto nihil, quidem sapiente ad. Soluta itaque tempore facere placeat esse. Cumque vero non aut maxime nostrum quas ipsam.',
                total_pages: 100,
              },
              created_at: new Date(),
            }}
          />
        ))}
      </section>
    </Container>
  );
};
