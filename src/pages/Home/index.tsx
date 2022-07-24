import {
  BlackWrapper,
  HomeContainer,
  InfoItems,
  InfoItemsCol1,
  InfoItemsCol2,
  InfoSpan,
  InfoWrapper,
  IntroContainer,
  MainTextInfo,
  OrangeWrapper,
  PurpleWrapper,
  YellowWrapper,
} from './styles'

import bigCoffeeCup from '../../assets/BigCoffeeCup.svg'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { defaultTheme } from '../../styles/themes/default'
import { useContext } from 'react'
import { CoffeeShop } from './components/CoffeeShop'
import { ProductsContext } from '../../contexts/ProductsContext'

export function Home() {
  const { availableProducts } = useContext(ProductsContext)

  return (
    <HomeContainer>
      <IntroContainer>
        <InfoWrapper>
          <MainTextInfo>
            <h1>Encontre o café perfeito</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </MainTextInfo>
          <InfoItems>
            <InfoItemsCol1>
              <InfoSpan>
                <OrangeWrapper>
                  <ShoppingCart
                    size={28}
                    weight={'fill'}
                    color={defaultTheme.white}
                  />
                </OrangeWrapper>
                Compra simples e segura
              </InfoSpan>
              <InfoSpan>
                <YellowWrapper>
                  <Timer size={28} weight={'fill'} color={defaultTheme.white} />
                </YellowWrapper>
                Entrega rápida e rastreada
              </InfoSpan>
            </InfoItemsCol1>
            <InfoItemsCol2>
              <InfoSpan>
                <BlackWrapper>
                  <Package
                    size={28}
                    weight={'fill'}
                    color={defaultTheme.white}
                  />
                </BlackWrapper>
                Embalagem mantém café intacto
              </InfoSpan>
              <InfoSpan>
                <PurpleWrapper>
                  <Coffee
                    size={28}
                    weight={'fill'}
                    color={defaultTheme.white}
                  />
                </PurpleWrapper>
                O café chega fresquinho até você
              </InfoSpan>
            </InfoItemsCol2>
          </InfoItems>
        </InfoWrapper>
        <img src={bigCoffeeCup} alt="Carrinho de compras" />
      </IntroContainer>
      <h2> Nossos Cafés</h2>
      <CoffeeShop availableCoffeesList={availableProducts} />
    </HomeContainer>
  )
}
