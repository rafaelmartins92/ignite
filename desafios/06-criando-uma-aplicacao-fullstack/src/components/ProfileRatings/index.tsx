import { useMemo, useState } from 'react';
import { Book, CategoriesOnBooks, Category, Rating } from '@prisma/client';
import { MagnifyingGlass, User } from '@phosphor-icons/react';

import { PageTitle } from '../ui/PageTitle';
import { Link } from '../ui/Link';
import { Input } from '../ui/Form/Input';
import { Text } from '../Typography';

import { ProfileRatingCard } from './ProfileRatingCard';
import { Container, RatingsList } from './styles';

export type ProfileRating = Rating & {
  book: Book & {
    categories: CategoriesOnBooks &
      {
        category: Category;
      }[];
  };
};

type ProfileRatingsProps = {
  ratings: ProfileRating[];
  isOwnProfile: boolean;
};

export const ProfileRatings = ({ ratings, isOwnProfile }: ProfileRatingsProps) => {
  const [search, setSearch] = useState('');

  const filteredRatings = useMemo(() => {
    return ratings.filter((rating) => {
      return rating.book.name.toLowerCase().includes(search.toLowerCase());
    });
  }, [ratings, search]);

  return (
    <Container>
      {isOwnProfile ? (
        <PageTitle title="Profile" icon={<User size={25} />}></PageTitle>
      ) : (
        <Link href="/" text="Back" iconSide="left" color="white" css={{ alignSelf: 'flex-start' }} />
      )}
      <Input
        placeholder="Find rated book"
        icon={<MagnifyingGlass size={20} />}
        css={{ marginTop: 40, marginBottom: 32 }}
        value={search}
        onChange={({ target }) => setSearch(target.value)}
      />
      <RatingsList>
        {filteredRatings.map((rating) => (
          <ProfileRatingCard key={rating.id} rating={rating} />
        ))}
        {filteredRatings.length <= 0 && (
          <Text color="gray-400" css={{ textAlign: 'center' }}>
            {search ? 'No results found!' : 'No reviews found!'}
          </Text>
        )}
      </RatingsList>
    </Container>
  );
};
