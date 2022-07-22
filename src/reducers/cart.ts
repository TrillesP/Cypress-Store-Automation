import { Product } from '../pages/Home'
import { produce } from 'immer'
/* eslint-disable no-unused-vars */
export interface CartItem {
  id: string
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
    // return {
    //   ...state,
    //   cart: [...state.cart, action.payload.cartItem],
    // }
    case ActionTypes.ADD_PRODUCT_TO_CART:
      return produce(state, (draft) => {
        draft.cart.push(action.payload.newCartItem)
      })
    case ActionTypes.REMOVE_PRODUCT_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((cartItem) => {
          return cartItem.product.id === action.payload.product.id
        }),
      }
    case ActionTypes.CHANGE_QUANTITY_OF_PRODUCT_ON_CART:
      return {
        ...state,
        cart: state.cart.map((cartItem) => {
          if (cartItem.product.id === action.payload.product_id) {
            action.payload.changeQtyDelta
              ? (cartItem.quantity = +1)
              : (cartItem.quantity = -1)
            return cartItem
          }
          return cartItem.product.id === action.payload.product.id
        }),
      }
    default:
      return state
  }
  // if (action.type === ActionTypes.REMOVE_PRODUCT_FROM_CART) {
  //   return {
  //     ...state,
  //     cart: state.cart.filter((cartItem) => {
  //       return cartItem.product.id === action.payload.product.id
  //     }),
  //   }
  // }
  // if (action.type === ActionTypes.CHANGE_QUANTITY_OF_PRODUCT_ON_CART) {
  //   return {
  //     ...state,
  //     cart: state.cart.map((cartItem) => {
  //       if (cartItem.product.id === action.payload.product_id) {
  //         action.payload.changeQtyDelta
  //           ? (cartItem.quantity = +1)
  //           : (cartItem.quantity = -1)
  //         return cartItem
  //       }
  //       return cartItem.product.id === action.payload.product.id
  //     }),
  //   }
  // }
}
