import { Trash } from 'phosphor-react';

import { RegularText } from '../../../../components/Typography';
import { QuantityInput } from '../../../Home/components/QuantityInput';

import { ActionsContainer, ProductCardContainer, RemoveButton } from './styles';

export function ProductCard() {
  return (
    <ProductCardContainer>
      <div>
        <img src="/products/americano.png" alt="" />
        <div>
          <RegularText color="subtitle">Americano</RegularText>
          <ActionsContainer>
            <QuantityInput size="small" />
            <RemoveButton>
              <Trash size={16} />
              Remove
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p>$9,90</p>
    </ProductCardContainer>
  );
}
