import { Input } from '../../../../components/Input';

import { AdressFormContainer } from './styles';

export function AdressForm() {
  return (
    <AdressFormContainer>
      <Input placeholder="ZIP CODE" className="zip-code" />
      <Input placeholder="Street" className="street" />
      <Input placeholder="Number" type="number" />
      <Input placeholder="Complement" className="complement" />
      <Input placeholder="District" />
      <Input placeholder="City" />
      <Input placeholder="State" />
    </AdressFormContainer>
  );
}
