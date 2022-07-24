import { produce } from 'immer'
import { Product } from '../contexts/ProductsContext'
/* eslint-disable no-unused-vars */
export interface CartItem {
  cartItemId: string
  product: Product
  quantity: number
}

export interface Cart {
  cart: CartItem[]
}

interface CartState {
  cart: CartItem[]
}

export enum ActionTypes {
  ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART',
  REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART',
  CHANGE_QUANTITY_OF_PRODUCT_ON_CART = 'CHANGE_QUANTITY_OF_PRODUCT_ON_CART',
}

export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_PRODUCT_TO_CART:
      return produce(state, (draft) => {
        draft.cart.push(action.payload.newCartItem)
      })
    case ActionTypes.REMOVE_PRODUCT_FROM_CART: {
      return produce(state, (draft) => {
        const newCart = draft.cart.filter(
          (item) => item.cartItemId !== action.payload.cartItemId,
        )
        draft.cart = newCart
      })
    }
    case ActionTypes.CHANGE_QUANTITY_OF_PRODUCT_ON_CART: {
      const currentCartIndexToChange = state.cart.findIndex((item) => {
        return item.cartItemId === action.payload.cartItemId
      })
      if (
        state.cart[currentCartIndexToChange].quantity <= 1 &&
        action.payload.changeQtyDelta === -1
      ) {
        return state
      }
      return produce(state, (draft) => {
        draft.cart[currentCartIndexToChange].quantity =
          draft.cart[currentCartIndexToChange].quantity +
          action.payload.changeQtyDelta
      })
    }
    default:
      return state
  }
}
