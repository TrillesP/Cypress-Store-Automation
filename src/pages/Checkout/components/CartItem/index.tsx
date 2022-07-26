import { Minus, Plus, Trash } from 'phosphor-react'
import { defaultTheme } from '../../../../styles/themes/default'
import {
  AddAndRemoveCounter,
  CartItemContainer,
  CartItemWrapper,
  CoffeeActionsContainer,
  CoffeeDetailContainer,
  CoffeePrice,
  RemoveFromCartButton,
  Separator,
} from './styles'
import { qtyDelta, CartContext } from '../../../../contexts/CartContext'
import { useContext } from 'react'

interface CartItemProps {
  cartItemId: string
  name: string
  img: string
  price: number
  quantity: number
}

export function CartItem({
  cartItemId,
  name,
  img,
  price,
  quantity,
}: CartItemProps) {
  const { removeItemFromCart, changeQuantityOfProductOnCart } =
    useContext(CartContext)
  let changeQtyDelta: qtyDelta

  function handleDecreaseProductQuantityOfProductInCart() {
    changeQtyDelta = -1
    changeQuantityOfProductOnCart({ cartItemId, changeQtyDelta })
  }
  function handleIncreaseProductQuantityOfProductInCart() {
    changeQtyDelta = 1
    changeQuantityOfProductOnCart({ cartItemId, changeQtyDelta })
  }

  function handleRemoveItemFromCart() {
    removeItemFromCart(cartItemId)
  }

  const fullPrice = price * quantity
  return (
    <CartItemWrapper>
      <CartItemContainer>
        <img src={img} alt="" />
        <CoffeeDetailContainer>
          <span> {name} </span>
          <CoffeeActionsContainer>
            <AddAndRemoveCounter>
              <button onClick={handleDecreaseProductQuantityOfProductInCart}>
                <Minus color={defaultTheme['purple-dark']} />
              </button>
              <span> {quantity} </span>
              <button onClick={handleIncreaseProductQuantityOfProductInCart}>
                <Plus color={defaultTheme['purple-dark']} />
              </button>
            </AddAndRemoveCounter>
            <RemoveFromCartButton onClick={handleRemoveItemFromCart}>
              <Trash size={16} color={defaultTheme['purple-dark']} />
              <span> Remover </span>
            </RemoveFromCartButton>
          </CoffeeActionsContainer>
        </CoffeeDetailContainer>
        <CoffeePrice> R$ {fullPrice.toFixed(2)} </CoffeePrice>
      </CartItemContainer>
      <Separator></Separator>
    </CartItemWrapper>
  )
}
