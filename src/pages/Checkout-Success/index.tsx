import { useContext } from 'react'
import { OrderContext } from '../../contexts/OrderContext'

export function CheckoutSuccess() {
  const { order } = useContext(OrderContext)
  return (
    <>
      <div> Success Page </div>
      <span>{JSON.stringify(order)}</span>
    </>
  )
}
