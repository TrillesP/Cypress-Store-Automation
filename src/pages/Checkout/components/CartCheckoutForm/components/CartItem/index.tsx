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

export function CartItem() {
  return (
    <CartItemWrapper>
      <CartItemContainer>
        <img src={coffeeImg} alt="" />
        <CoffeeDetailContainer>
          <span> Café Americano </span>
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
        <CoffeePrice> R$ 9,90 </CoffeePrice>
      </CartItemContainer>
      <Separator></Separator>
    </CartItemWrapper>
  )
}
