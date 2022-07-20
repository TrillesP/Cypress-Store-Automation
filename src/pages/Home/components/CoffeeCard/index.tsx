import {
  AddAndRemoveCounter,
  AddToCartButton,
  CoffeeBuyDiv,
  CoffeeCardWrapper,
  CoffeeDescDiv,
  CoffeeFlavorPills,
  CoffeePrice,
} from './styles'
import Americano from '../../../../assets/Coffees/Type=Americano.svg'
import { Minus, Plus, ShoppingCart, Trash } from 'phosphor-react'
import { defaultTheme } from '../../../../styles/themes/default'
import { RemoveFromCartButton } from '../../../Checkout/components/CartCheckoutForm/styles'

export function CoffeeCard() {
  return (
    <>
      <CoffeeCardWrapper>
        <img src={Americano} alt="Xícara de café vista de cima" />
        <CoffeeFlavorPills>
          <span> Tradicional </span>
          <span> Barista </span>
        </CoffeeFlavorPills>
        <CoffeeDescDiv>
          <h3> Expresso Tradicional </h3>
          <p> O tradicional café feito com água quente e grãos moídos </p>
        </CoffeeDescDiv>
        <CoffeeBuyDiv>
          <p> R$ </p>
          <CoffeePrice> 9,90 </CoffeePrice>
          <AddAndRemoveCounter>
            <button>
              <Minus color={defaultTheme['purple-dark']} weight="bold" />
            </button>
            <span> 1 </span>
            <button>
              <Plus color={defaultTheme['purple-dark']} weight="bold" />
            </button>
          </AddAndRemoveCounter>
          <AddToCartButton>
            <ShoppingCart />
          </AddToCartButton>
        </CoffeeBuyDiv>
      </CoffeeCardWrapper>
    </>
  )
}
