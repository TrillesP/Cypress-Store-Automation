import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from '@/styles/global'
import { defaultTheme } from '@/styles/themes/default'
import { Router } from '@/Router'
import { CartContextProvider } from './contexts/CartContext'
import { ProductsContextProvider } from './contexts/ProductsContext'
import { OrderContextProvider } from './contexts/OrderContext'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <ProductsContextProvider>
          <CartContextProvider>
            <OrderContextProvider>
              <Router />
            </OrderContextProvider>
          </CartContextProvider>
        </ProductsContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
