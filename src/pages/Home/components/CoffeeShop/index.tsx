import { Product } from '@/contexts/ProductsContext'
import { CoffeeCard } from '../CoffeeCard'
import { CoffeeListContainer } from './styles'

interface CoffeeShopProps {
  availableCoffeesList: Product[]
}

export function CoffeeShop({ availableCoffeesList }: CoffeeShopProps) {
  const coffeeShop = availableCoffeesList ? (
    availableCoffeesList.map((coffee) => {
      return (
        <CoffeeCard
          key={coffee.id}
          id={coffee.id}
          name={coffee.name}
          tags={coffee.tags}
          description={coffee.description}
          price={coffee.price}
          img={coffee.img}
        />
      )
    })
  ) : (
    <div> </div>
  )
  return <CoffeeListContainer>{coffeeShop}</CoffeeListContainer>
}
