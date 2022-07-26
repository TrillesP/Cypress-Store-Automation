import * as Styles from './styles'

import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { defaultTheme } from '@/styles/themes/default'
import { CartContext } from '@/contexts/CartContext'
import { MouseEvent, useContext, useState } from 'react'
import { Product } from '@/contexts/ProductsContext'

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
  // const { availableProducts } = useContext(ProductsContext)

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
      <Styles.CoffeeCardWrapper>
        <img src={img} alt={`Xícara de ${name} vista de cima`} />
        <Styles.CoffeeFlavorPills>
          {tags.map((tag) => {
            return <span key={tag}> {tag} </span>
          })}
        </Styles.CoffeeFlavorPills>
        <Styles.CoffeeDescDiv>
          <h3> {name} </h3>
          <p> {description} </p>
        </Styles.CoffeeDescDiv>
        <Styles.CoffeeBuyDiv>
          <p> R$ </p>
          <Styles.CoffeePrice> {price.toFixed(2)} </Styles.CoffeePrice>
          <Styles.AddAndRemoveCounter>
            <button onClick={handleClickDecrement}>
              <Minus color={defaultTheme['purple-dark']} weight="bold" />
            </button>
            <span> {currentQuantity} </span>
            <button onClick={handleClickIncrement}>
              <Plus color={defaultTheme['purple-dark']} weight="bold" />
            </button>
          </Styles.AddAndRemoveCounter>
          <Styles.AddToCartButton onClick={handleClickAddToCart}>
            <ShoppingCart />
          </Styles.AddToCartButton>
        </Styles.CoffeeBuyDiv>
      </Styles.CoffeeCardWrapper>
    </>
  )
}
