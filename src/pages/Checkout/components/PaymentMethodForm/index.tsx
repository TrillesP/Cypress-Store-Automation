import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { defaultTheme } from '../../../../styles/themes/default'
import {
  PaymentInfoHeaderContainer,
  PaymentInfoTextContainer,
  PaymentMethodContainer,
  PaymentOptionsSelectContainer,
} from './styles'

export function PaymentMethodForm() {
  return (
    <PaymentMethodContainer>
      <PaymentInfoHeaderContainer>
        <CurrencyDollar size={20} color={defaultTheme.purple} />
        <PaymentInfoTextContainer>
          <span> Pagamento </span>
          <span>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </span>
        </PaymentInfoTextContainer>
      </PaymentInfoHeaderContainer>
      <PaymentOptionsSelectContainer>
        <button>
          <CreditCard size={16} color={defaultTheme.purple} />
          Cartão de Crédito
        </button>
        <button>
          <Bank size={16} color={defaultTheme.purple} />
          Cartão de Débito
        </button>
        <button>
          <Money size={16} color={defaultTheme.purple} />
          Dinheiro
        </button>
      </PaymentOptionsSelectContainer>
    </PaymentMethodContainer>
  )
}
