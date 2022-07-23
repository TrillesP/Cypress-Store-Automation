import { Minus, Plus, Trash } from 'phosphor-react'
import { defaultTheme } from '../../../../../../styles/themes/default'
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

import coffeeImg from '../../../../../../assets/Coffees/Type=Americano.svg'
import { useContext } from 'react'
import {
  Product,
  ProductsContext,
} from '../../../../../../contexts/ProductsContext'

export function CartItem(productId: string) {
  const { availableProducts } = useContext(ProductsContext)
  const pId = productId.productId
  const productInCart = availableProducts.find((product) => product.id === pId)
  console.log(productInCart)
  // const { name, img, price } = productInCart as Product

  return (
    <CartItemWrapper>
      <CartItemContainer>
        <img src={productInCart.img} alt="" />
        <CoffeeDetailContainer>
          <span> {productInCart.name} </span>
          <CoffeeActionsContainer>
            <AddAndRemoveCounter>
              <button>
                <Minus color={defaultTheme['purple-dark']} />
              </button>
              <span> 1 </span>
              <button>
                <Plus color={defaultTheme['purple-dark']} />
              </button>
            </AddAndRemoveCounter>
            <RemoveFromCartButton>
              <Trash size={16} color={defaultTheme['purple-dark']} />
              <span> Remover </span>
            </RemoveFromCartButton>
          </CoffeeActionsContainer>
        </CoffeeDetailContainer>
        <CoffeePrice> R$ {productInCart.price} </CoffeePrice>
      </CartItemContainer>
      <Separator></Separator>
    </CartItemWrapper>
  )
}
