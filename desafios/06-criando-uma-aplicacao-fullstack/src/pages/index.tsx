import { NextPageWithLayout } from './_app';
import { DefaultLayout } from '@/layouts/DefaultLayout';
import { HomeContainer } from '@/styles/pages/home';
import { PopularBooks } from '@/components/PopularBooks';
import { LatestRatings } from '@/components/LatestRatings';

const HomePage: NextPageWithLayout = () => {
  return (
    <HomeContainer>
      <LatestRatings />
      <PopularBooks />
    </HomeContainer>
  );
};

HomePage.getLayout = (page) => {
  return (
    <div>
      <DefaultLayout title="Home">{page}</DefaultLayout>
    </div>
  );
};

export default HomePage;
