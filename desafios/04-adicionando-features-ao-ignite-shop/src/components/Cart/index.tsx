import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'phosphor-react';
import Image from 'next/image';

import { CartButton } from '../CartButton';

import {
  CartClose,
  CartContent,
  CartProduct,
  CartProductDetails,
  CartProductImage,
  CartResume,
  ResumeDetails,
} from './styles';
import { useCart } from '../../hooks/useCart';

export function Cart() {
  const { cartItems, cartTotal, removeFromCart } = useCart();
  const cartQuantity = cartItems.length;
  const formattedCartTotal = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(cartTotal);

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <CartButton />
      </Dialog.Trigger>

      <Dialog.Portal>
        <CartContent>
          <CartClose>
            <X size={24} weight="bold" />
          </CartClose>
          <h2>Cart</h2>

          <section>
            {cartQuantity <= 0 && <p>Looks like you cart is empty 🙁</p>}
            {cartItems.map((cartItem) => (
              <CartProduct key={cartItem.id}>
                <CartProductImage>
                  <Image
                    width={100}
                    height={93}
                    alt=""
                    src={cartItem.imageUrl}
                  />
                </CartProductImage>
                <CartProductDetails>
                  <p>{cartItem.name}</p>
                  <strong>{cartItem.price}</strong>
                  <button onClick={() => removeFromCart(cartItem.id)}>
                    Remove
                  </button>
                </CartProductDetails>
              </CartProduct>
            ))}
          </section>

          <CartResume>
            <ResumeDetails>
              <div>
                <span>Quantity</span>
                <p>
                  {cartQuantity} {cartQuantity === 1 ? 'item' : 'items'}
                </p>
              </div>
              <div>
                <span>Total</span>
                <p>{formattedCartTotal}</p>
              </div>
            </ResumeDetails>
            <button>Finish order</button>
          </CartResume>
        </CartContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
