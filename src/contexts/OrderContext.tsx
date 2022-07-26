import { createContext, ReactNode, useState } from 'react'

interface OrderData {
  cep: string
  streetAddress: string
  streetNumber: string
  streetComplement?: string
  neighborhood: string
  city: string
  uf: string
  paymentMethod: string
}
export interface Order {
  cep: string
  streetAddress: string
  streetNumber: string
  streetComplement?: string
  neighborhood: string
  city: string
  uf: string
  paymentMethod: string
}

interface OrderContextType {
  order: Order
  createNewOrder: (data: OrderData) => void
}

export const OrderContext = createContext({} as OrderContextType)

interface OrderContextProviderProps {
  children: ReactNode
}

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [order, setOrder] = useState<Order>({
    cep: '',
    streetAddress: '',
    streetNumber: '',
    streetComplement: '',
    neighborhood: '',
    city: '',
    uf: '',
    paymentMethod: '',
  })

  function createNewOrder(data: Order) {
    setOrder(data)
  }
  return (
    <OrderContext.Provider
      value={{
        order,
        createNewOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
