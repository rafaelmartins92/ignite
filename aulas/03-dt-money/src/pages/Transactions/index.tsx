import { Header } from '../../components/Header';
import { Summary } from '../../components/Summary';
import {
  PriceHighLight,
  TransactionsContainer,
  TransactionsTable,
} from './styles';

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighLight variant="income">R$ 10.000,00</PriceHighLight>
              </td>
              <td>Venda</td>
              <td>13/12/20223</td>
            </tr>
            <tr>
              <td width="50%">Hamburguer</td>
              <td>
                <PriceHighLight variant="outcome">
                  - R$ 10.000,00
                </PriceHighLight>
              </td>
              <td>Alimentação</td>
              <td>13/12/20223</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
