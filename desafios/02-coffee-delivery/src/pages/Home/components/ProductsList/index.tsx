import { ProductCard } from '../ProductCard';

import { TitleText } from '../../../../components/Typography';
import { coffees } from '../../../../data/productslist';

import { ProductList, ProductsListContainer } from './styles';

export function ProductsList() {
  return (
    <ProductsListContainer className="container">
      <TitleText size="l" color="subtitle">
        Our coffees
      </TitleText>
      <ProductList>
        {coffees.map((coffee) => (
          <ProductCard key={coffee.id} product={coffee} />
        ))}
      </ProductList>
    </ProductsListContainer>
  );
}
