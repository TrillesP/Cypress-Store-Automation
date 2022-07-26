import {
  AddAndRemoveCounter,
  AddToCartButton,
  CoffeeBuyDiv,
  CoffeeCardWrapper,
  CoffeeDescDiv,
  CoffeeFlavorPills,
  CoffeePrice,
} from './styles'

import { Minus, Plus, ShoppingCart, Trash } from 'phosphor-react'
import { defaultTheme } from '../../../../styles/themes/default'
import { CartContext } from '../../../../contexts/CartContext'
import { MouseEvent, useContext, useState } from 'react'
import { Product } from '../..'
import { ProductsContext } from '../../../../contexts/ProductsContext'

interface CoffeeCardProps {
  id: string
  name: string
  tags: string[]
  description: string
  price: number
  img: string
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
  const { addProductToCart } = useContext(CartContext)
  const { availableProducts } = useContext(ProductsContext)

  const [currentQuantity, setCurrentQuantity] = useState(1)
  const [product] = useState(currentProduct)

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
    createNewCartItem({ product, quantity })
  }

  return (
    <>
      <CoffeeCardWrapper>
        {/* <form onSubmit={handleCreateNewCartItem}> */}
        <img src={img} alt={`Xícara de ${name} vista de cima`} />
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
