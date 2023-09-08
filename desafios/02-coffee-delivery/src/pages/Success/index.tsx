import { useTheme } from 'styled-components';
import { Clock, CurrencyDollar, MapPin } from 'phosphor-react';

import { RegularText, TitleText } from '../../components/Typography';
import { BulletPoint } from '../../components/BulletPoint';

import successIllustration from '../../assets/success-illustration.svg';

import { OrderDetailsContainer, SuccessContainer } from './styles';

export function SuccessPage() {
  const { colors } = useTheme();

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
                Delivery to <strong>Joe Doe Street, 999</strong>
                <br />
                Santos - São Paulo, SP
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
                <strong>Credit Card</strong>
              </RegularText>
            }
          />
        </OrderDetailsContainer>
        <img src={successIllustration} alt="" />
      </section>
    </SuccessContainer>
  );
}
