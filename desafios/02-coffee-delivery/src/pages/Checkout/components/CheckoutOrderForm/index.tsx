import { CurrencyDollar, MapPinLine } from 'phosphor-react';
import { useTheme } from 'styled-components';

import { AdressForm } from './AdressForm';
import { PaymentMethodOptions } from './PaymentMethodOptions';
import { SectionTitle } from '../SectionTitle';
import { TitleText } from '../../../../components/Typography';

import { CheckoutOrderFormContainer, FormSectionContainer } from './styles';

export function CheckoutOrderForm() {
  const { colors } = useTheme();

  return (
    <CheckoutOrderFormContainer>
      <TitleText size="xs" color="subtitle">
        Finish your order
      </TitleText>

      <FormSectionContainer>
        <SectionTitle
          title="Delivery Address"
          subtitle="Please provide the address where you would like to receive your order"
          icon={<MapPinLine size={22} color={colors['brand-yellow-dark']} />}
        />
        <AdressForm />
      </FormSectionContainer>
      <FormSectionContainer>
        <SectionTitle
          title="Payment"
          subtitle="Payment is made upon delivery. Please choose your preferred payment method"
          icon={
            <CurrencyDollar size={22} color={colors['brand-purple-dark']} />
          }
        />
        <PaymentMethodOptions />
      </FormSectionContainer>
    </CheckoutOrderFormContainer>
  );
}
