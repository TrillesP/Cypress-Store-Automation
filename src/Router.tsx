import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from '@/layouts/DefaultLayout'
import { Checkout } from '@/pages/Checkout'
import { CheckoutSuccess } from '@/pages/Checkout-Success'
import { Home } from '@/pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/checkout-success" element={<CheckoutSuccess />}></Route>
      </Route>
    </Routes>
  )
}
