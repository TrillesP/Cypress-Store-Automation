import { createContext, ReactNode, useReducer } from 'react'
import {
  ActionTypes,
  Cart,
  CartItem,
  Product,
  cartReducer,
} from '../reducers/cart'

interface AddToCartData {
  product: Product
  quantity: number
}

export type qtyDelta = -1 | 1
interface ChangeProductQuantityData {
  product_id: string
  changeQtyDelta: qtyDelta
}

interface CartContextType {
  cart: CartItem[]
  addProductToCart: (data: AddToCartData) => void
  removeProductFromCart: (product_id: string) => void
  changeQuantityOfProductOnCart: (data: ChangeProductQuantityData) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(cartReducer, {
    cart: [],
  })

  const { cart } = cartState

  function addProductToCart(data: AddToCartData) {
    const id = String(new Date().getTime())

    const newCartItem: CartItem = {
      id,
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

  function removeProductFromCart(product_id: string) {
    dispatch({
      type: ActionTypes.REMOVE_PRODUCT_FROM_CART,
      payload: {
        product_id,
      },
    })
  }

  function changeQuantityOfProductOnCart(data: ChangeProductQuantityData) {
    dispatch({
      type: ActionTypes.CHANGE_QUANTITY_OF_PRODUCT_ON_CART,
      payload: {
        product_id,
        changeQtyDelta,
      },
    })
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addProductToCart,
        removeProductFromCart,
        changeQuantityOfProductOnCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
