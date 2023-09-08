import { Hero } from './components/Hero';
import { ProductsList } from './components/ProductsList';

import { HomeContainer } from './styles';

export function HomePage() {
  return (
    <HomeContainer>
      <Hero />
      <ProductsList />
    </HomeContainer>
  );
}
