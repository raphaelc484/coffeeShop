import { HomeContainer, HomeHeader, HomePublicity } from './styles'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import giantCoffeeImg from '../../assets/GiantCoffee.svg'

export function Home() {
  return (
    <HomeContainer>
      <HomeHeader>
        <div>
          <strong>Encontre o café perfeito para qualquer hora do dia</strong>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <HomePublicity>
            <p>
              <ShoppingCart size={32} weight="fill" className="shopcart" />
              Compra simples e segura
            </p>
            <p>
              <Package size={32} weight="fill" className="package" />
              Embalagem mantém o café intacto
            </p>
            <p>
              <Timer size={32} weight="fill" className="timer" />
              Entrega rápida e rastreada
            </p>
            <p>
              <Coffee size={32} weight="fill" className="coffee" />O café chega
              fresquinho até você
            </p>
          </HomePublicity>
        </div>

        <img src={giantCoffeeImg} alt="" />
      </HomeHeader>
    </HomeContainer>
  )
}
