import { GetServerSideProps } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Stripe from 'stripe';

import { stripe } from '../lib/stripe';

import {
  ImageContainer,
  ImagesContainer,
  SuccessContainer,
} from '../styles/pages/success';

interface SuccessProps {
  customerName: string;
  productsImages: string[];
}

export default function Success({
  customerName,
  productsImages,
}: SuccessProps) {
  return (
    <>
      <Head>
        <title>Rafael Martins | Purchase made!</title>

        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        <ImagesContainer>
          {productsImages.map((image, i) => (
            <ImageContainer key={i}>
              <Image src={image} width={120} height={110} alt="" />
            </ImageContainer>
          ))}
        </ImagesContainer>
        <h1>Purchase made!</h1>

        <p>
          That`s awesome, <strong>{customerName}</strong>!
        </p>
        {productsImages.length > 1 ? (
          <p>Your shirt is on its way to your home.</p>
        ) : (
          <p>
            Your <strong>{productsImages.length}</strong> shirts are on their
            way to your home.
          </p>
        )}

        <Link href={'/'}>Back to catalog</Link>
      </SuccessContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  });

  const customerName = session.customer_details.name;
  const productsImages = session.line_items.data.map((item) => {
    const product = item.price.product as Stripe.Product;

    return product.images[0];
  });

  return {
    props: {
      customerName,
      productsImages,
    },
  };
};
