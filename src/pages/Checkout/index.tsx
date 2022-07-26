import {
  AddressFieldsContainer,
  AddressInfoContainer,
  AddressLabelContainer,
  BasePricingContainer,
  CartCheckoutContainer,
  CEPInput,
  CityInput,
  ComplementInput,
  ConfirmOrderButton,
  FormContainer,
  GrandTotalPriceContainer,
  MainCheckoutContainer,
  NeighborhoodCityUFContainer,
  NeighborhoodInput,
  NumberComplementContainer,
  NumberInput,
  OrderDetailContainer,
  OrderSummaryContainer,
  PaymentInfoHeaderContainer,
  PaymentInfoTextContainer,
  PaymentMethodContainer,
  PaymentOptionsSelectContainer,
  PricingContainer,
  SelectedCoffeesBigContainer,
  StreetInput,
  UFInput,
  PaymentOptionsSelector,
} from './styles'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { defaultTheme } from '../../styles/themes/default'
import { CartItem } from './components/CartItem'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { OrderContext } from '../../contexts/OrderContext'
import * as zod from 'zod'
import { useNavigate } from 'react-router-dom'

const newCheckoutFormValidationSchema = zod.object({
  cep: zod.string().min(8, 'CEP deve ter 8 dígitos sem traço.'),
  streetAddress: zod.string().min(5).max(150),
  streetNumber: zod.string().min(1).max(5),
  streetComplement: zod.string().optional(),
  neighborhood: zod.string().min(5).max(120),
  city: zod.string().min(3).max(120),
  uf: zod.string().min(2).max(2),
  paymentMethod: zod.string().min(1),
})

type NewCheckoutFormData = zod.infer<typeof newCheckoutFormValidationSchema>
export function Checkout() {
  const navigate = useNavigate()
  const { cart } = useContext(CartContext)
  const deliveryFee = 5.5
  const totalPrice = cart.reduce(
    (previousValue, currentValue) =>
      previousValue + currentValue.product.price * currentValue.quantity,
    0,
  )
  const grandTotalPrice = deliveryFee + totalPrice
  const { order, createNewOrder } = useContext(OrderContext)
  const newCheckoutForm = useForm<NewCheckoutFormData>({
    resolver: zodResolver(newCheckoutFormValidationSchema),
    defaultValues: {
      cep: '',
      streetAddress: '',
      streetNumber: '',
      streetComplement: '',
      neighborhood: '',
      city: '',
      uf: '',
      paymentMethod: '',
    },
  })

  const { register, handleSubmit, formState } = newCheckoutForm

  function handleCreateNewCheckoutOrder(data: NewCheckoutFormData) {
    createNewOrder(data)
    // reset()
  }

  console.log(formState.errors)

  return (
    <>
      <FormProvider {...newCheckoutForm}>
        <form action="" onSubmit={handleSubmit(handleCreateNewCheckoutOrder)}>
          <MainCheckoutContainer>
            <OrderDetailContainer>
              <FormContainer>
                <h3>Complete seu pedido</h3>

                <AddressInfoContainer>
                  <MapPinLine size={22} color={defaultTheme['yellow-dark']} />
                  <AddressLabelContainer>
                    <label htmlFor=""> Endereço de Entrega </label>
                    <span>
                      Informe o endereço de entrega para receber seu pedido
                    </span>
                  </AddressLabelContainer>
                </AddressInfoContainer>
                <AddressFieldsContainer>
                  <CEPInput placeholder="CEP" {...register('cep')} />
                  <StreetInput
                    placeholder="Rua"
                    {...register('streetAddress')}
                  />
                  <NumberComplementContainer>
                    <NumberInput
                      placeholder="Número"
                      {...register('streetNumber')}
                    />
                    <ComplementInput
                      placeholder="Complemento                                                 Opcional"
                      {...register('streetComplement')}
                    />
                  </NumberComplementContainer>
                  <NeighborhoodCityUFContainer>
                    <NeighborhoodInput
                      placeholder="Bairro"
                      {...register('neighborhood')}
                    />
                    <CityInput placeholder="Cidade" {...register('city')} />
                    <UFInput placeholder="UF" {...register('uf')} />
                  </NeighborhoodCityUFContainer>
                </AddressFieldsContainer>
              </FormContainer>
              <PaymentMethodContainer>
                <PaymentInfoHeaderContainer>
                  <CurrencyDollar size={20} color={defaultTheme.purple} />
                  <PaymentInfoTextContainer>
                    <span> Pagamento </span>
                    <span>
                      O pagamento é feito na entrega. Escolha a forma que deseja
                      pagar
                    </span>
                  </PaymentInfoTextContainer>
                </PaymentInfoHeaderContainer>
                <PaymentOptionsSelectContainer>
                  <PaymentOptionsSelector>
                    <input
                      type="radio"
                      value="Cartão de débito"
                      {...register('paymentMethod')}
                    />
                    <CreditCard size={16} color={defaultTheme.purple} />
                    Cartão de Crédito
                  </PaymentOptionsSelector>
                  <PaymentOptionsSelector>
                    <input
                      type="radio"
                      value="Cartão de crédito"
                      {...register('paymentMethod')}
                    />
                    <Bank size={16} color={defaultTheme.purple} />
                    Cartão de Débito
                  </PaymentOptionsSelector>
                  <PaymentOptionsSelector>
                    <input
                      type="radio"
                      value="Dinheiro"
                      {...register('paymentMethod')}
                    />
                    <Money size={16} color={defaultTheme.purple} />
                    Dinheiro
                  </PaymentOptionsSelector>
                </PaymentOptionsSelectContainer>
              </PaymentMethodContainer>
            </OrderDetailContainer>
            <CartCheckoutContainer>
              <h3>Cafés Selecionados</h3>
              <SelectedCoffeesBigContainer>
                {cart.map((item) => {
                  return (
                    <CartItem
                      key={Math.random()}
                      cartItemId={item.cartItemId}
                      img={item.product.img}
                      price={item.product.price}
                      name={item.product.name}
                      quantity={item.quantity}
                    />
                  )
                })}
                <OrderSummaryContainer>
                  <PricingContainer>
                    <BasePricingContainer>
                      <label htmlFor="">Total de Items</label>
                      <span>R$ {totalPrice.toFixed(2)}</span>
                    </BasePricingContainer>
                    <BasePricingContainer>
                      <label htmlFor="">Entrega</label>
                      <span> R$ {deliveryFee.toFixed(2)}</span>
                    </BasePricingContainer>
                    <GrandTotalPriceContainer>
                      <label htmlFor="">Total</label>
                      <span> R$ {grandTotalPrice.toFixed(2)}</span>
                    </GrandTotalPriceContainer>
                  </PricingContainer>
                </OrderSummaryContainer>
                <ConfirmOrderButton
                  type="submit"
                  onClick={() => {
                    if (order.paymentMethod) {
                      navigate('/checkout-success')
                    }
                  }}
                >
                  Confirmar Pedido
                </ConfirmOrderButton>
              </SelectedCoffeesBigContainer>
            </CartCheckoutContainer>
          </MainCheckoutContainer>
        </form>
      </FormProvider>
    </>
  )
}
