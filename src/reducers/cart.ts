export interface CartItem {
  id: string
  product: Product
  quantity: number
}

export interface Cart {
  id: string
  cartItems: CartItem[]
}

interface CartState {
  cartItems: CartItem[]
}

export enum ActionTypes {
  ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART',
  REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART',
  CHANGE_QUANTITY_OF_PRODUCT_ON_CART = 'CHANGE_QUANTITY_OF_PRODUCT_ON_CART',
}

export function cartReducer(state: CartState, action: any) {
  if (action.type === ActionTypes.ADD_PRODUCT_TO_CART) {
    return {
      ...state,
      cartItems: [...state.cartItems, action.payload.newCartItem],
    }
  }
}
