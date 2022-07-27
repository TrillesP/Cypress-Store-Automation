import {
  Actions,
  CartButton,
  HeaderContainer,
  LocationPill,
  CartQtyIndicator,
} from './styles'
import logoCoffee from '../../assets/Logo.svg'
import cartImg from '../../assets/Cart.svg'
import locationIcon from '../../assets/LocationIcon.svg'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { NavLink } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'

export function Header() {
  const { cart } = useContext(CartContext)
  console.log(cart)
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logoCoffee} alt="Coffee Delivery Logo" />
      </NavLink>
      <Actions>
        <LocationPill>
          <img src={locationIcon} alt="" />
          Porto Alegre - RS
        </LocationPill>
        <NavLink to="/checkout" title="checkout">
          <CartButton>
            <ShoppingCart size={28} />
          </CartButton>
        </NavLink>
        <CartQtyIndicator>{cart.length}</CartQtyIndicator>
      </Actions>
    </HeaderContainer>
  )
}
