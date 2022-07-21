import { Product } from '../..'
import { CoffeeCard } from '../CoffeeCard'
import { CoffeeListContainer } from './styles'

interface CoffeeShopProps {
  availableCoffeesList: Product[]
}

export function CoffeeShop({ availableCoffeesList }: CoffeeShopProps) {
  return (
    <CoffeeListContainer>
      {availableCoffeesList.length > 0
        ? availableCoffeesList.map((coffee) => {
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
        : null}
    </CoffeeListContainer>
  )
}
