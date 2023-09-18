import { MouseEvent } from 'react';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import Stripe from 'stripe';
import useEmblaCarousel from 'embla-carousel-react';

import { CartButton } from '../components/CartButton';
import { stripe } from '../lib/stripe';
import { useCart } from '../hooks/useCart';
import { IProduct } from '../contexts/CartContext';

import { HomeContainer, Product, SliderContainer } from '../styles/pages/home';

interface HomeProps {
  products: IProduct[];
}
export default function Home(props: HomeProps) {
  const [emblaRef] = useEmblaCarousel({
    align: 'start',
    skipSnaps: false,
    dragFree: true,
  });

  const { addToCart, checkIfItemAlreadyExists } = useCart();

  function handleAddToCart(
    e: MouseEvent<HTMLButtonElement>,
    product: IProduct
  ) {
    e.preventDefault();
    addToCart(product);
  }

  return (
    <>
      <Head>
        <title>Rafael Martins | Ignite Shop</title>
      </Head>

      <div style={{ overflow: 'hidden', width: '100%' }}>
        <HomeContainer>
          <div className="embla" ref={emblaRef}>
            <SliderContainer className="embla__container container">
              {props.products.map((product) => {
                return (
                  <Link
                    href={`/product/${product.id}`}
                    key={product.id}
                    prefetch={false}
                  >
                    <Product className="embla__slide">
                      <Image
                        src={product.imageUrl}
                        width={520}
                        height={480}
                        alt=""
                      />

                      <footer>
                        <div>
                          <strong>{product.name}</strong>
                          <span>{product.price}</span>
                        </div>
                        <CartButton
                          color={'yellow'}
                          size={'large'}
                          disabled={checkIfItemAlreadyExists(product.id)}
                          onClick={(e) => handleAddToCart(e, product)}
                        />
                      </footer>
                    </Product>
                  </Link>
                );
              })}
            </SliderContainer>
          </div>
        </HomeContainer>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(price.unit_amount / 100),
      numberPrice: price.unit_amount / 100,
      defaultPriceId: price.id,
    };
  });

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  };
};
