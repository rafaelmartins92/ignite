import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, FormProvider } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { useCart } from '../../hooks/useCart';

import { CheckoutOrderForm } from './components/CheckoutOrderForm';
import { CheckoutResume } from './components/CheckoutResume';

import { CheckoutContainer } from './styles';

enum PaymentMethods {
  credit = 'credit',
  debit = 'debit',
  cash = 'cash',
}

const confirmCheckoutFormValidationSchema = zod.object({
  zipCode: zod.string().min(1, 'Zip Code is required'),
  street: zod.string().min(1, 'Street is required'),
  number: zod.string().min(1, 'Number is required'),
  complement: zod.string(),
  district: zod.string().min(1, 'District is required'),
  city: zod.string().min(1, 'City is required'),
  state: zod.string().min(1, 'State is required'),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: 'Payment Method is required' };
    },
  }),
});

export type CheckoutData = zod.infer<
  typeof confirmCheckoutFormValidationSchema
>;

type ConfirmCheckoutFormData = CheckoutData;

export function CheckoutPage() {
  const confirmCheckoutForm = useForm<ConfirmCheckoutFormData>({
    resolver: zodResolver(confirmCheckoutFormValidationSchema),
  });

  const { handleSubmit } = confirmCheckoutForm;

  const navigate = useNavigate();
  const { clearCart } = useCart();

  function handleConfirmCheckout(data: ConfirmCheckoutFormData) {
    navigate('/success', {
      state: data,
    });
    clearCart();
  }
  return (
    <FormProvider {...confirmCheckoutForm}>
      <CheckoutContainer
        className="container"
        onSubmit={handleSubmit(handleConfirmCheckout)}
      >
        <CheckoutOrderForm />
        <CheckoutResume />
      </CheckoutContainer>
    </FormProvider>
  );
}
