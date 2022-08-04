import { HeaderContainer, HeaderOptions } from './styles'
import logoImg from '../../assets/Logo.svg'
import { ShoppingCart, MapPin } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoImg} alt="" />

      <HeaderOptions>
        <p>
          <MapPin size={24} weight="fill" />
          <strong>São Paulo, SP</strong>
        </p>

        <nav>
          <NavLink to="/checkout">
            <ShoppingCart size={24} weight="fill" />
          </NavLink>
        </nav>
      </HeaderOptions>
    </HeaderContainer>
  )
}
