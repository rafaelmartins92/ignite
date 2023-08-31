import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '../../styles/pages/product';

export default function Product() {
  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>

      <ProductDetails>
        <h1>Camiseta</h1>
        <span>R$ 99,90</span>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere earum
          temporibus autem ipsa, recusandae qui?
        </p>

        <button>Buy now</button>
      </ProductDetails>
    </ProductContainer>
  );
}
