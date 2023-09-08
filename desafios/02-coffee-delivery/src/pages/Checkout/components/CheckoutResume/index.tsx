import { ProductCard } from '../ProductCard';

import { TitleText } from '../../../../components/Typography';

import { ConfirmationSection } from './ConfirmationSection';
import { CheckoutResumeContainer, DetailsContainer } from './styles';

export function CheckoutResume() {
  return (
    <CheckoutResumeContainer>
      <TitleText size="xs" color="subtitle">
        Selected coffees
      </TitleText>

      <DetailsContainer>
        <ProductCard />
        <ProductCard />

        <ConfirmationSection />
      </DetailsContainer>
    </CheckoutResumeContainer>
  );
}
