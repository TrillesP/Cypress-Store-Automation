import { createContext, ReactNode, useState } from 'react'
import Americano from '../assets/Coffees/Type=Americano.svg'
import Arabe from '../assets/Coffees/Type=Arabe.svg'
import CafeComLeite from '../assets/Coffees/Type=Cafe com Leite.svg'
import CafeGelado from '../assets/Coffees/Type=Cafe Gelado.svg'
import Capuccino from '../assets/Coffees/Type=Capuccino.svg'
import ChocolateQuente from '../assets/Coffees/Type=Chocolate Quente.svg'
import Cubano from '../assets/Coffees/Type=Cubano.svg'
import ExpressoCremoso from '../assets/Coffees/Type=Expresso Cremoso.svg'
import Expresso from '../assets/Coffees/Type=Expresso.svg'
import Havaiano from '../assets/Coffees/Type=Havaiano.svg'
import Irlandes from '../assets/Coffees/Type=Irlandes.svg'
import Latte from '../assets/Coffees/Type=Latte.svg'
import Macchiato from '../assets/Coffees/Type=Macchiato.svg'
import Mochaccino from '../assets/Coffees/Type=Mochaccino.svg'

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
interface ProductsContextProviderProps {
  children: ReactNode
}

const initialAvailableProducts = [
  {
    id: '1',
    name: 'Americano',
    tags: ['Tradicional'],
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    img: Americano,
  },
  {
    id: '2',
    name: 'Árabe',
    tags: ['Especial'],
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
    img: Arabe,
  },
  {
    id: '3',
    name: 'Café com Leite',
    tags: ['Tradicional', 'Com Leite'],
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    img: CafeComLeite,
  },
  {
    id: '4',
    name: 'Expresso Gelado',
    tags: ['Tradicional', 'Gelado'],
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    img: CafeGelado,
  },
  {
    id: '5',
    name: 'Capuccino',
    tags: ['Tradicional', 'Com Leite'],
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
    img: Capuccino,
  },
  {
    id: '6',
    name: 'Chocolate Quente',
    tags: ['Especial', 'Com Leite'],
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
    img: ChocolateQuente,
  },
  {
    id: '7',
    name: 'Café com Leite',
    tags: ['Tradicional', 'Com Leite'],
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    img: CafeComLeite,
  },
  {
    id: '8',
    name: 'Cubano',
    tags: ['Especial', 'Alcoólico', 'Gelado'],
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
    img: Cubano,
  },
  {
    id: '9',
    name: 'Expresso Cremoso',
    tags: ['Tradicional'],
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    img: ExpressoCremoso,
  },
  {
    id: '10',
    name: 'Expresso Tradicional',
    tags: ['Tradicional'],
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    img: Expresso,
  },
  {
    id: '11',
    name: 'Havaiano',
    tags: ['Especial'],
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
    img: Havaiano,
  },
  {
    id: '12',
    name: 'Irlandês',
    tags: ['Especial', 'Alcoólico'],
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
    img: Irlandes,
  },
  {
    id: '13',
    name: 'Latte',
    tags: ['Tradicional', 'Com Leite'],
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
    img: Latte,
  },
  {
    id: '14',
    name: 'Macchiato',
    tags: ['Tradicional', 'Com leite'],
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
    img: Macchiato,
  },
  {
    id: '15',
    name: 'Mochaccino',
    tags: ['Tradicional', 'Com leite'],
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
    img: Mochaccino,
  },
]

interface ProductsContextType {
  availableProducts: Product[]
  // getProductInfoById: (productId: string) => Product
}

export const ProductsContext = createContext({} as ProductsContextType)

export function ProductsContextProvider({
  children,
}: ProductsContextProviderProps) {
  const [availableProducts, setAvailableProducts] = useState<Product[]>(
    initialAvailableProducts,
  )
  return (
    <ProductsContext.Provider
      value={{
        availableProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}
