import { ShoppingCart } from 'phosphor-react';

import { QuantityInput } from '../QuantityInput';

import { RegularText, TitleText } from '../../../../components/Typography';
import { formatMoney } from '../../../../utils/formatMoney';

import {
  AddCartWrapper,
  CardFooter,
  ProductCardContainer,
  ProductDescription,
  ProductName,
  Tags,
} from './styles';

export interface Coffee {
  id: number;
  tags: string[];
  name: string;
  description: string;
  imagePath: string;
  price: number;
}

interface ProductCardsProps {
  product: Coffee;
}

export function ProductCard({ product }: ProductCardsProps) {
  const formattedPrice = formatMoney(product.price);

  return (
    <ProductCardContainer>
      <img src={`/products/${product.imagePath}`} alt="" />
      <Tags>
        {product.tags.map((tag) => (
          <span key={`${product.id}-${tag}`}>{tag}</span>
        ))}
      </Tags>
      <ProductName>{product.name}</ProductName>
      <ProductDescription>{product.description}</ProductDescription>
      <CardFooter>
        <div>
          <RegularText size="s">$</RegularText>
          <TitleText size="m" color="text" as="strong">
            {formattedPrice}
          </TitleText>
        </div>

        <AddCartWrapper>
          <QuantityInput size="medium" />
          <button>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </AddCartWrapper>
      </CardFooter>
    </ProductCardContainer>
  );
}
