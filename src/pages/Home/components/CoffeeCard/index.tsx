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
import Arabe from '../../../../assets/Coffees/Type=Arabe.svg'
import CafeComLeite from '../../../../assets/Coffees/Type=Cafe com Leite.svg'
import CafeGelado from '../../../../assets/Coffees/Type=Cafe Gelado.svg'
import Capuccino from '../../../../assets/Coffees/Type=Capuccino.svg'
import ChocolateQuente from '../../../../assets/Coffees/Type=Chocolate Quente.svg'
import Cubano from '../../../../assets/Coffees/Type=Cubano.svg'
import ExpressoCremoso from '../../../../assets/Coffees/Type=Expresso Cremoso.svg'
import Expresso from '../../../../assets/Coffees/Type=Expresso.svg'
import Havaiano from '../../../../assets/Coffees/Type=Havaiano.svg'
import Irlandes from '../../../../assets/Coffees/Type=Irlandes.svg'
import Latte from '../../../../assets/Coffees/Type=Latte.svg'
import Macchiato from '../../../../assets/Coffees/Type=Macchiato.svg'
import Mochaccino from '../../../../assets/Coffees/Type=Mochaccino.svg'

import { Minus, Plus, ShoppingCart, Trash } from 'phosphor-react'
import { defaultTheme } from '../../../../styles/themes/default'
import { RemoveFromCartButton } from '../../../Checkout/components/CartCheckoutForm/styles'
import { CartContext, qtyDelta } from '../../../../contexts/CartContext'
import { MouseEvent, useContext, useState } from 'react'
import { Product } from '../..'

interface CoffeeCardProps {
  id: string
  name: string
  tags: string[]
  description: string
  price: number
  img: string
}
const coffeesImgObj = {
  Americano,
  Arabe,
  CafeComLeite,
  CafeGelado,
  Capuccino,
  ChocolateQuente,
  Cubano,
  ExpressoCremoso,
  Expresso,
  Havaiano,
  Irlandes,
  Latte,
  Macchiato,
  Mochaccino,
}

interface NewCartItemData {
  product: Product
  quantity: number
}

export function CoffeeCard({
  id,
  name,
  tags,
  description,
  price,
  img,
}: CoffeeCardProps) {
  const currentProduct: Product = {
    id,
    name,
    tags,
    description,
    price,
    img,
  }
  const { cart, addProductToCart } = useContext(CartContext)

  const [currentQuantity, setCurrentQuantity] = useState(1)
  const [product, setProduct] = useState(currentProduct)

  function createNewCartItem(data: NewCartItemData) {
    addProductToCart(data)
  }

  function handleClickIncrement(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    setCurrentQuantity(currentQuantity + 1)
  }

  function handleClickDecrement(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    if (currentQuantity > 1) {
      setCurrentQuantity(currentQuantity - 1)
    }
  }

  function handleClickAddToCart(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    const quantity: number = currentQuantity
    console.log(`adding: ${product.name} with qty: ${quantity}`)
    createNewCartItem({ product, quantity })
  }

  return (
    <>
      <CoffeeCardWrapper>
        {/* <form onSubmit={handleCreateNewCartItem}> */}
        <img src={coffeesImgObj[img]} alt={`Xícara de ${name} vista de cima`} />
        <CoffeeFlavorPills>
          {tags.map((tag) => {
            return <span key={tag}> {tag} </span>
          })}
        </CoffeeFlavorPills>
        <CoffeeDescDiv>
          <h3> {name} </h3>
          <p> {description} </p>
        </CoffeeDescDiv>
        <CoffeeBuyDiv>
          <p> R$ </p>
          <CoffeePrice> {price.toFixed(2)} </CoffeePrice>
          <AddAndRemoveCounter>
            <button onClick={handleClickDecrement}>
              <Minus color={defaultTheme['purple-dark']} weight="bold" />
            </button>
            <span> {currentQuantity} </span>
            <button onClick={handleClickIncrement}>
              <Plus color={defaultTheme['purple-dark']} weight="bold" />
            </button>
          </AddAndRemoveCounter>
          <AddToCartButton onClick={handleClickAddToCart}>
            <ShoppingCart />
          </AddToCartButton>
        </CoffeeBuyDiv>
        {/* </form> */}
      </CoffeeCardWrapper>
    </>
  )
}
