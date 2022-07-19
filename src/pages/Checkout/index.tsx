import { AddressForm } from './components/AddressForm'
import { CartCheckoutForm } from './components/CartCheckoutForm'
import { PaymentMethodForm } from './components/PaymentMethodForm'
import { MainCheckoutContainer, OrderDetailContainer } from './styles'

export function Checkout() {
  return (
    <MainCheckoutContainer>
      <OrderDetailContainer>
        <AddressForm />
        <PaymentMethodForm />
      </OrderDetailContainer>
      <CartCheckoutForm />
    </MainCheckoutContainer>
  )
}
