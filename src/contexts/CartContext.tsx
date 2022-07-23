import { createContext, ReactNode, useEffect, useReducer } from 'react'
import { ActionTypes, CartItem, Product, cartReducer } from '../reducers/cart'

interface AddToCartData {
  product: Product
  quantity: number
}

export type qtyDelta = -1 | 1
interface ChangeProductQuantityData {
  productId: string
  changeQtyDelta: qtyDelta
}

interface CartContextType {
  cart: CartItem[]
  addProductToCart: (data: AddToCartData) => void
  removeProductFromCart: (productId: string) => void
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

  function removeProductFromCart(productId: string) {
    dispatch({
      type: ActionTypes.REMOVE_PRODUCT_FROM_CART,
      payload: {
        productId,
      },
    })
  }

  function changeQuantityOfProductOnCart(data: ChangeProductQuantityData) {
    dispatch({
      type: ActionTypes.CHANGE_QUANTITY_OF_PRODUCT_ON_CART,
      payload: {
        productId,
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
