import { Button, Text, TextArea, TextInput } from '@orafadev-ignite-ui/react'
import { CalendarBlank, Clock } from 'phosphor-react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import dayjs from 'dayjs'
import { zodResolver } from '@hookform/resolvers/zod'

import { ConfirmForm, FormActions, FormError, FormHeader } from './styles'

const confirmFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'The name must have at least 3 characters' }),
  email: z.string().email({ message: 'Type a valid e-mail' }),
  observations: z.string().nullable(),
})

type ConfirmFormData = z.infer<typeof confirmFormSchema>

interface ConfirmStepProps {
  schedulingDate: Date
  onCancelConfirmation: () => void
}
export function ConfirmStep({
  schedulingDate,
  onCancelConfirmation,
}: ConfirmStepProps) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<ConfirmFormData>({
    resolver: zodResolver(confirmFormSchema),
  })

  function handleConfirmScheduling(data: ConfirmFormData) {
    console.log(data)
  }

  const describeDate = dayjs(schedulingDate).format('MMMM DDD YYYY')
  const describeTime = dayjs(schedulingDate).format('HH:mm[h]')

  return (
    <ConfirmForm as="form" onSubmit={handleSubmit(handleConfirmScheduling)}>
      <FormHeader>
        <Text>
          <CalendarBlank />
          {describeDate}
        </Text>
        <Text>
          <Clock />
          {describeTime}
        </Text>
      </FormHeader>

      <label>
        <Text size="sm">Full name</Text>
        <TextInput placeholder="Your name" {...register('name')} />
        {errors.name && <FormError>{errors.name.message}</FormError>}
      </label>

      <label>
        <Text size="sm">E-mail</Text>
        <TextInput
          type="email"
          placeholder="johndoe@example.com"
          {...register('email')}
        />
        {errors.email && <FormError>{errors.email.message}</FormError>}
      </label>

      <label>
        <Text size="sm">Observations</Text>
        <TextArea {...register('observations')} />
      </label>

      <FormActions>
        <Button type="button" variant="tertiary" onClick={onCancelConfirmation}>
          Cancel
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          Confirm
        </Button>
      </FormActions>
    </ConfirmForm>
  )
}
