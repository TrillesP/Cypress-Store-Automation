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
import { useContext, useState } from 'react'
import { CoffeeShop } from './components/CoffeeShop'
import { CartContext, qtyDelta } from '../../contexts/CartContext'
export interface Product {
  id: string
  name: string
  tags: string[]
  description: string
  price: number
  img: string
}
export interface Products {
  products: Product[]
}

// interface NewCartItemData {
//   product: Product
//   quantity: qtyDelta
// }

export function Home() {
  // const { cart, addProductToCart } = useContext(CartContext)

  // function handleCreateNewCartItem(data: NewCartItemData) {
  //   addProductToCart(data)
  // }

  const availableCoffees: Product[] = [
    {
      id: '1',
      name: 'Americano',
      tags: ['Tradicional'],
      description: 'Expresso diluído, menos intenso que o tradicional',
      price: 9.9,
      img: 'Americano',
    },
    {
      id: '2',
      name: 'Árabe',
      tags: ['Especial'],
      description: 'Bebida preparada com grãos de café árabe e especiarias',
      price: 9.9,
      img: 'Arabe',
    },
    {
      id: '3',
      name: 'Café com Leite',
      tags: ['Tradicional', 'Com Leite'],
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      price: 9.9,
      img: 'CafeComLeite',
    },
    {
      id: '4',
      name: 'Expresso Gelado',
      tags: ['Tradicional', 'Gelado'],
      description: 'Bebida preparada com café expresso e cubos de gelo',
      price: 9.9,
      img: 'CafeGelado',
    },
    {
      id: '5',
      name: 'Capuccino',
      tags: ['Tradicional', 'Com Leite'],
      description:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      price: 9.9,
      img: 'Capuccino',
    },
    {
      id: '6',
      name: 'Chocolate Quente',
      tags: ['Especial', 'Com Leite'],
      description:
        'Bebida feita com chocolate dissolvido no leite quente e café',
      price: 9.9,
      img: 'ChocolateQuente',
    },
    {
      id: '7',
      name: 'Café com Leite',
      tags: ['Tradicional', 'Com Leite'],
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      price: 9.9,
      img: 'CafeComLeite',
    },
    {
      id: '8',
      name: 'Cubano',
      tags: ['Especial', 'Alcoólico', 'Gelado'],
      description:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
      price: 9.9,
      img: 'Cubano',
    },
    {
      id: '9',
      name: 'Expresso Cremoso',
      tags: ['Tradicional'],
      description: 'Café expresso tradicional com espuma cremosa',
      price: 9.9,
      img: 'ExpressoCremoso',
    },
    {
      id: '10',
      name: 'Expresso Tradicional',
      tags: ['Tradicional'],
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
      img: 'Expresso',
    },
    {
      id: '11',
      name: 'Havaiano',
      tags: ['Especial'],
      description: 'Bebida adocicada preparada com café e leite de coco',
      price: 9.9,
      img: 'Havaiano',
    },
    {
      id: '12',
      name: 'Irlandês',
      tags: ['Especial', 'Alcoólico'],
      description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      price: 9.9,
      img: 'Irlandes',
    },
    {
      id: '13',
      name: 'Latte',
      tags: ['Tradicional', 'Com Leite'],
      description:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      price: 9.9,
      img: 'Latte',
    },
    {
      id: '14',
      name: 'Macchiato',
      tags: ['Tradicional', 'Com leite'],
      description:
        'Café expresso misturado com um pouco de leite quente e espuma',
      price: 9.9,
      img: 'Macchiato',
    },
    {
      id: '15',
      name: 'Mochaccino',
      tags: ['Tradicional', 'Com leite'],
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      price: 9.9,
      img: 'Mochaccino',
    },
  ]
  const [availableProducts, setAvailableProducts] =
    useState<Product[]>(availableCoffees)

  function createAvailableProducts(data: Product[]) {
    setAvailableProducts(data)
  }
  // createAvailableProducts(availableCoffees)

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
