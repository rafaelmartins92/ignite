import { Button } from '../../../../components/Button';
import { RegularText } from '../../../../components/Typography';

import { ConfimartionSectionContainer } from './styles';

export function ConfirmationSection() {
  return (
    <ConfimartionSectionContainer>
      <div>
        <RegularText size="s">Itens</RegularText>
        <RegularText>$ 9,90</RegularText>
      </div>
      <div>
        <RegularText size="s">Delivery fee</RegularText>
        <RegularText>$ 3,90</RegularText>
      </div>
      <div>
        <RegularText weight="700" color="subtitle" size="l">
          Total
        </RegularText>
        <RegularText weight="700" color="subtitle" size="l">
          $ 29,90
        </RegularText>
      </div>

      <Button text="Confirm order" />
    </ConfimartionSectionContainer>
  );
}
