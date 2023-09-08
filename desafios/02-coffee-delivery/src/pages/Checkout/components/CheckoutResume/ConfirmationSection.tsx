import { Button } from '../../../../components/Button';
import { RegularText } from '../../../../components/Typography';
import { useCart } from '../../../../hooks/useCart';
import { formatMoney } from '../../../../utils/formatMoney';

import { ConfimartionSectionContainer } from './styles';

const DELIVERY_FEE = 3.5;

export function ConfirmationSection() {
  const { cartItemsTotal, cartQuantity } = useCart();

  const cartTotal = cartItemsTotal + DELIVERY_FEE;
  const formattedItemsTotal = formatMoney(cartItemsTotal);
  const formattedCartTotal = formatMoney(cartTotal);
  const formattedDeliveryFee = formatMoney(DELIVERY_FEE);

  return (
    <ConfimartionSectionContainer>
      <div>
        <RegularText size="s">Itens</RegularText>
        <RegularText>$ {formattedItemsTotal}</RegularText>
      </div>
      <div>
        <RegularText size="s">Delivery fee</RegularText>
        <RegularText>$ {formattedDeliveryFee}</RegularText>
      </div>
      <div>
        <RegularText weight="700" color="subtitle" size="l">
          Total
        </RegularText>
        <RegularText weight="700" color="subtitle" size="l">
          $ {formattedCartTotal}
        </RegularText>
      </div>

      <Button text="Confirm order" disabled={cartQuantity <= 0} />
    </ConfimartionSectionContainer>
  );
}
