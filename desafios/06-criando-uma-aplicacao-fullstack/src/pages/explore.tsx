import { useState } from 'react';
import { Binoculars, MagnifyingGlass } from '@phosphor-icons/react';
import { BooksGrid, ExploreContainer, TagsContainer } from '@/styles/pages/explore';
import { DefaultLayout } from '@/layouts/DefaultLayout';
import { PageTitle } from '@/components/ui/PageTitle';
import { Input } from '@/components/ui/Form/Input';
import { Tag } from '@/components/ui/Tag';
import { BookCard } from '@/components/BookCard';
import { NextPageWithLayout } from './_app';

const ExplorePage: NextPageWithLayout = () => {
  const [search, setSearch] = useState('');

  return (
    <ExploreContainer>
      <header>
        <PageTitle title="Explore" icon={<Binoculars size={32} />} />

        <Input
          placeholder="Search by book or author"
          icon={<MagnifyingGlass size={20} />}
          css={{ maxWidth: 433 }}
          value={search}
          onChange={({ target }) => setSearch(target.value)}
        />
      </header>

      <TagsContainer>
        <Tag>Education</Tag>
      </TagsContainer>

      <BooksGrid>
        {/* <BookCard />`` */}
      </BooksGrid>
    </ExploreContainer>
  );
};

ExplorePage.getLayout = (page) => {
  return (
    <div>
      <DefaultLayout title="Explore">{page}</DefaultLayout>
    </div>
  );
};

export default ExplorePage;
