import { Trash } from 'phosphor-react';

import { QuantityInput } from '../../../Home/components/QuantityInput';
import { RegularText } from '../../../../components/Typography';
import { CartItem } from '../../../../contexts/CartContext';
import { formatMoney } from '../../../../utils/formatMoney';
import { useCart } from '../../../../hooks/useCart';

import { ActionsContainer, ProductCardContainer, RemoveButton } from './styles';

interface ProductCardProps {
  product: CartItem;
}

export function ProductCard({ product }: ProductCardProps) {
  const { changeCartItemQuantity, removeCartItem } = useCart();

  function handleIncrease() {
    changeCartItemQuantity(product.id, 'increase');
  }

  function handleDecrease() {
    changeCartItemQuantity(product.id, 'decrease');
  }

  function handleRemove() {
    removeCartItem(product.id);
  }

  const productTotalPrice = product.price * product.quantity;
  const formattedPrice = formatMoney(productTotalPrice);

  return (
    <ProductCardContainer>
      <div>
        <img src={`/products/${product.imagePath}`} alt="" />
        <div>
          <RegularText color="subtitle">{product.name}</RegularText>
          <ActionsContainer>
            <QuantityInput
              size="small"
              quantity={product.quantity}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
            />
            <RemoveButton onClick={handleRemove}>
              <Trash size={16} />
              Remove
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p>$ {formattedPrice}</p>
    </ProductCardContainer>
  );
}
