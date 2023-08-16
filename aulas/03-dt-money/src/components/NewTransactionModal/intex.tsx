import * as Dialog from '@radix-ui/react-dialog';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  CloseButton,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from './styles';
import { useForm } from 'react-hook-form';

const newTransactionSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  // type: z.enum(['income', 'outcome']),
});

type NewTransactionInputs = z.infer<typeof newTransactionSchema>;

export function NewTransactionModal() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<NewTransactionInputs>({
    resolver: zodResolver(newTransactionSchema),
  });

  async function handleCreateNewTransaction(data: NewTransactionInputs) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>New transaction</Dialog.Title>

        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form action="" onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            type="text"
            placeholder="Description"
            required
            {...register('description')}
          />
          <input
            type="number"
            placeholder="Price"
            required
            {...register('price', { valueAsNumber: true })}
          />
          <input
            type="text"
            placeholder="Category"
            required
            {...register('category')}
          />

          <TransactionType>
            <TransactionTypeButton variant="income" value="income">
              <ArrowCircleUp size={24} />
              Income
            </TransactionTypeButton>
            <TransactionTypeButton variant="outcome" value="outcome">
              <ArrowCircleDown size={24} />
              Outcome
            </TransactionTypeButton>
          </TransactionType>
          <button type="submit" disabled={isSubmitting}>
            Register
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
