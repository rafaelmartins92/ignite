
import { CheckoutOrderForm } from './components/CheckoutOrderForm';
import { CheckoutResume } from './components/CheckoutResume';

import { CheckoutContainer } from './styles';

export function CheckoutPage() {
  return (
    <CheckoutContainer className="container">
      <CheckoutOrderForm />
      <CheckoutResume />
    </CheckoutContainer>
  );
}
