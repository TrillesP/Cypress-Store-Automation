import { Actions, CartButton, HeaderContainer, LocationPill } from './styles'
import logoCoffee from '../../assets/Logo.svg'
import cart from '../../assets/Cart.svg'
import locationIcon from '../../assets/LocationIcon.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoCoffee} alt="Coffee Delivery Logo" />
      <Actions>
        <LocationPill>
          <img src={locationIcon} alt="" />
          Porto Alegre - RS
        </LocationPill>
        <CartButton>
          <img src={cart} alt="" />
        </CartButton>
      </Actions>
    </HeaderContainer>
  )
}
