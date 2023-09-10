import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from 'styled-components';
import { Clock, CurrencyDollar, MapPin } from 'phosphor-react';

import { CheckoutData } from '../Checkout';
import { paymentMethods } from '../Checkout/components/CheckoutOrderForm/PaymentMethodOptions';
import { RegularText, TitleText } from '../../components/Typography';
import { BulletPoint } from '../../components/BulletPoint';

import successIllustration from '../../assets/success-illustration.svg';

import { OrderDetailsContainer, SuccessContainer } from './styles';

interface LocationType {
  state: CheckoutData;
}

export function SuccessPage() {
  const { colors } = useTheme();

  const { state } = useLocation() as unknown as LocationType;

  const navigate = useNavigate();

  useEffect(() => {
    if (!state) {
      navigate('/');
    }
  }, []);

  if (!state) return <></>;

  return (
    <SuccessContainer className="container">
      <div>
        <TitleText size="l">Yeah! Order confirmed</TitleText>
        <RegularText size="l" color="subtitle">
          Now all you have to do is wait, and soon the coffee will be on its way
          to you
        </RegularText>
      </div>

      <section>
        <OrderDetailsContainer>
          <BulletPoint
            icon={<MapPin weight="fill" />}
            iconBgColor={colors['brand-purple']}
            text={
              <RegularText>
                Delivery to{' '}
                <strong>
                  {state.street}, {state.number}
                </strong>
                <br />
                {state.district} - {state.city}, {state.state}
              </RegularText>
            }
          />
          <BulletPoint
            icon={<Clock weight="fill" />}
            iconBgColor={colors['brand-yellow']}
            text={
              <RegularText>
                Delivery forecast <br />
                <strong>20 min - 30 min</strong>
              </RegularText>
            }
          />
          <BulletPoint
            icon={<CurrencyDollar weight="fill" />}
            iconBgColor={colors['brand-yellow-dark']}
            text={
              <RegularText>
                Payment upon delivery <br />
                <strong>{paymentMethods[state.paymentMethod].label}</strong>
              </RegularText>
            }
          />
        </OrderDetailsContainer>
        <img src={successIllustration} alt="" />
      </section>
    </SuccessContainer>
  );
}
