import { useFormContext } from 'react-hook-form';

import { Input } from '../../../../components/Input';

import { AdressFormContainer } from './styles';

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string;
    };
  };
}

export function AdressForm() {
  const { register, formState } = useFormContext();

  const { errors } = formState as unknown as ErrorsType;

  return (
    <AdressFormContainer>
      <Input
        placeholder="Zip Code"
        className="zip-code"
        {...register('zipCode')}
        error={errors.zipCode?.message}
      />
      <Input
        placeholder="Street"
        className="street"
        {...register('street')}
        error={errors.street?.message}
      />
      <Input
        placeholder="Number"
        type="number"
        {...register('number')}
        error={errors.number?.message}
      />
      <Input
        placeholder="Complement"
        className="complement"
        {...register('complement')}
        error={errors.complement?.message}
        rightText="Optional"
      />
      <Input
        placeholder="District"
        {...register('district')}
        error={errors.district?.message}
      />
      <Input
        placeholder="City"
        {...register('city')}
        error={errors.city?.message}
      />
      <Input
        placeholder="State"
        {...register('state')}
        error={errors.state?.message}
      />
    </AdressFormContainer>
  );
}
