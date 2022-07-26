import * as Styles from './styles'

import bigCoffeeCup from '../../assets/BigCoffeeCup.svg'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { defaultTheme } from '../../styles/themes/default'
import { useContext } from 'react'
import { CoffeeShop } from './components/CoffeeShop'
import { ProductsContext } from '../../contexts/ProductsContext'

export function Home() {
  const { availableProducts } = useContext(ProductsContext)

  return (
    <Styles.HomeContainer>
      <Styles.IntroContainer>
        <Styles.InfoWrapper>
          <Styles.MainTextInfo>
            <h1>Encontre o café perfeito</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </Styles.MainTextInfo>
          <Styles.InfoItems>
            <Styles.InfoItemsCol1>
              <Styles.InfoSpan>
                <Styles.OrangeWrapper>
                  <ShoppingCart
                    size={28}
                    weight={'fill'}
                    color={defaultTheme.white}
                  />
                </Styles.OrangeWrapper>
                Compra simples e segura
              </Styles.InfoSpan>
              <Styles.InfoSpan>
                <Styles.YellowWrapper>
                  <Timer size={28} weight={'fill'} color={defaultTheme.white} />
                </Styles.YellowWrapper>
                Entrega rápida e rastreada
              </Styles.InfoSpan>
            </Styles.InfoItemsCol1>
            <Styles.InfoItemsCol2>
              <Styles.InfoSpan>
                <Styles.BlackWrapper>
                  <Package
                    size={28}
                    weight={'fill'}
                    color={defaultTheme.white}
                  />
                </Styles.BlackWrapper>
                Embalagem mantém café intacto
              </Styles.InfoSpan>
              <Styles.InfoSpan>
                <Styles.PurpleWrapper>
                  <Coffee
                    size={28}
                    weight={'fill'}
                    color={defaultTheme.white}
                  />
                </Styles.PurpleWrapper>
                O café chega fresquinho até você
              </Styles.InfoSpan>
            </Styles.InfoItemsCol2>
          </Styles.InfoItems>
        </Styles.InfoWrapper>
        <img src={bigCoffeeCup} alt="Carrinho de compras" />
      </Styles.IntroContainer>
      <h2> Nossos Cafés</h2>
      <CoffeeShop availableCoffeesList={availableProducts} />
    </Styles.HomeContainer>
  )
}
