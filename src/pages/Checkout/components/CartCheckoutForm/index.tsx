import {
  BasePricingContainer,
  CartCheckoutContainer,
  ConfirmOrderButton,
  DeliveryPriceContainer,
  GrandTotalPriceContainer,
  PricingContainer,
  TotalItemsPriceContainer,
} from './styles'

import { defaultTheme } from '../../../../styles/themes/default'
import { CartItem } from './components/CartItem'
import { CartContext } from '../../../../contexts/CartContext'
import { useContext } from 'react'

export function CartCheckoutForm() {
  const { cart } = useContext(CartContext)
  console.log(cart.length)
  // console.log(cart[0].)
  return (
    <CartCheckoutContainer>
      <h3>Cafés Selecionados</h3>
      {cart.map((item) => {
        return <CartItem key={Math.random()} productId={item.product.id} />
      })}
      <PricingContainer>
        <BasePricingContainer>
          <label htmlFor="">Total de Items</label>
          <span> R$ 29,70</span>
        </BasePricingContainer>
        <BasePricingContainer>
          <label htmlFor="">Entrega</label>
          <span> R$ 5,50</span>
        </BasePricingContainer>
        <GrandTotalPriceContainer>
          <label htmlFor="">Total</label>
          <span> R$ 29,70</span>
        </GrandTotalPriceContainer>
      </PricingContainer>
      <ConfirmOrderButton> Confirmar Pedido </ConfirmOrderButton>
    </CartCheckoutContainer>
  )
}
