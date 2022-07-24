import { createContext, ReactNode, useEffect, useReducer } from 'react'
import { ActionTypes, CartItem, cartReducer } from '../reducers/cart'
import { Product } from './ProductsContext'

interface AddToCartData {
  product: Product
  quantity: number
}

export type qtyDelta = -1 | 1
interface ChangeProductQuantityData {
  cartItemId: string
  changeQtyDelta: qtyDelta
}

interface CartContextType {
  cart: CartItem[]
  addProductToCart: (data: AddToCartData) => void
  removeItemFromCart: (cartItemId: string) => void
  changeQuantityOfProductOnCart: (data: ChangeProductQuantityData) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      cart: [],
    },
    () => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-shop:cart-state-1.0.0',
      )
      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      } else {
        return { cart: [] }
      }
    },
  )

  const { cart } = cartState

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState)

    localStorage.setItem('@coffee-shop:cart-state-1.0.0', stateJSON)
  }, [cartState])

  function addProductToCart(data: AddToCartData) {
    const cartItemId = String(Math.random() * 100000000000000000)

    const newCartItem: CartItem = {
      cartItemId,
      product: data.product,
      quantity: data.quantity,
    }
    dispatch({
      type: ActionTypes.ADD_PRODUCT_TO_CART,
      payload: {
        newCartItem,
      },
    })
  }

  function removeItemFromCart(cartItemId: string) {
    dispatch({
      type: ActionTypes.REMOVE_PRODUCT_FROM_CART,
      payload: {
        cartItemId,
      },
    })
  }

  function changeQuantityOfProductOnCart(data: ChangeProductQuantityData) {
    console.log(data.cartItemId)
    const cartItemId = data.cartItemId
    const changeQtyDelta = data.changeQtyDelta
    dispatch({
      type: ActionTypes.CHANGE_QUANTITY_OF_PRODUCT_ON_CART,
      payload: {
        cartItemId,
        changeQtyDelta,
      },
    })
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addProductToCart,
        removeItemFromCart,
        changeQuantityOfProductOnCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
