import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import { useTheme } from 'styled-components';

import { BulletPoint } from '../../../../components/BulletPoint';
import { RegularText } from '../../../../components/Typography';
import heroImg from '../../../../assets/hero-img.png';

import {
  BulletsContainer,
  HeroContainer,
  HeroContent,
  HeroTitle,
} from './styles';

export function Hero() {
  const { colors } = useTheme();

  return (
    <HeroContainer>
      <HeroContent className="container">
        <div>
          <section>
            <HeroTitle size="xl">
              Find the perfect coffee for any time of day
            </HeroTitle>
            <RegularText size="l" color="subtitle" as="h3">
              With Coffee Delivery, you receive your coffee wherever you are,
              anytime
            </RegularText>
          </section>

          <BulletsContainer>
            <BulletPoint
              icon={<ShoppingCart weight="fill" />}
              iconBgColor={colors['brand-yellow-dark']}
              text="Simple and secure purchase"
            />
            <BulletPoint
              icon={<Package weight="fill" />}
              iconBgColor={colors['base-text']}
              text="Packaging keeps the coffee intact"
            />
            <BulletPoint
              icon={<Timer weight="fill" />}
              iconBgColor={colors['brand-yellow']}
              text="Fast and tracked delivery"
            />
            <BulletPoint
              icon={<Coffee weight="fill" />}
              iconBgColor={colors['brand-purple']}
              text="The coffee arrives fresh to you"
            />
          </BulletsContainer>
        </div>

        <img src={heroImg} alt="" />
      </HeroContent>
    </HeroContainer>
  );
}
