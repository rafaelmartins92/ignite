import { ProductCard } from '../ProductCard';

import { TitleText } from '../../../../components/Typography';
import { useCart } from '../../../../hooks/useCart';

import { ConfirmationSection } from './ConfirmationSection';
import { CheckoutResumeContainer, DetailsContainer } from './styles';

export function CheckoutResume() {
  const { cartItems } = useCart();

  return (
    <CheckoutResumeContainer>
      <TitleText size="xs" color="subtitle">
        Selected coffees
      </TitleText>

      <DetailsContainer>
        {cartItems.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}

        <ConfirmationSection />
      </DetailsContainer>
    </CheckoutResumeContainer>
  );
}
