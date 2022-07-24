import {
  BasePricingContainer,
  CartCheckoutContainer,
  ConfirmOrderButton,
  GrandTotalPriceContainer,
  OrderSummaryContainer,
  PricingContainer,
  SelectedCoffeesBigContainer,
} from './styles'

import { CartItem } from './components/CartItem'
import { CartContext } from '../../../../contexts/CartContext'
import { useContext } from 'react'

export function CartCheckoutForm() {
  const { cart } = useContext(CartContext)
  console.log(`Current cart size: ${cart.length}`)
  const deliveryFee = 5.5
  const totalPrice = cart.reduce(
    (previousValue, currentValue) =>
      previousValue + currentValue.product.price * currentValue.quantity,
    0,
  )
  const grandTotalPrice = deliveryFee + totalPrice
  return (
    <CartCheckoutContainer>
      <h3>Cafés Selecionados</h3>
      <SelectedCoffeesBigContainer>
        {cart.map((item) => {
          return (
            <CartItem
              key={Math.random()}
              cartItemId={item.cartItemId}
              img={item.product.img}
              price={item.product.price}
              name={item.product.name}
              quantity={item.quantity}
            />
          )
        })}
        <OrderSummaryContainer>
          <PricingContainer>
            <BasePricingContainer>
              <label htmlFor="">Total de Items</label>
              <span>{totalPrice.toFixed(2)}</span>
            </BasePricingContainer>
            <BasePricingContainer>
              <label htmlFor="">Entrega</label>
              <span> {deliveryFee.toFixed(2)}</span>
            </BasePricingContainer>
            <GrandTotalPriceContainer>
              <label htmlFor="">Total</label>
              <span> {grandTotalPrice.toFixed(2)}</span>
            </GrandTotalPriceContainer>
          </PricingContainer>
          <ConfirmOrderButton> Confirmar Pedido </ConfirmOrderButton>
        </OrderSummaryContainer>
      </SelectedCoffeesBigContainer>
    </CartCheckoutContainer>
  )
}
