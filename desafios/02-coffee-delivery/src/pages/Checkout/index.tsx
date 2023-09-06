
import { CheckoutOrderForm } from './components/CheckoutOrderForm';

import { CheckoutContainer } from './styles';

export function CheckoutPage() {
  return (
    <CheckoutContainer className="container">
      <CheckoutOrderForm />
    </CheckoutContainer>
  );
}
