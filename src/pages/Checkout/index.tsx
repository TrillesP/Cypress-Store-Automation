import * as Styled from './styles'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { defaultTheme } from '@/styles/themes/default'
import { CartItem } from './components/CartItem'
import { useContext } from 'react'
import { CartContext } from '@/contexts/CartContext'
import { OrderContext } from '@/contexts/OrderContext'
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
  const { createNewOrder } = useContext(OrderContext)
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

  const { register, handleSubmit, formState, watch } = newCheckoutForm

  function handleCreateNewCheckoutOrder(data: NewCheckoutFormData) {
    createNewOrder(data)
    navigate('/checkout-success')
  }

  const paymentMethod = watch('paymentMethod')
  const isSubmitDisabled = !paymentMethod

  console.log(formState.errors)

  const selectedCoffeesInCart = cart.map((item) => {
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
  })
  return (
    <>
      <FormProvider {...newCheckoutForm}>
        <form action="" onSubmit={handleSubmit(handleCreateNewCheckoutOrder)}>
          <Styled.MainCheckoutContainer>
            <Styled.OrderDetailContainer>
              <Styled.FormContainer>
                <h3>Complete seu pedido</h3>
                <Styled.AddressInfoContainer>
                  <MapPinLine size={22} color={defaultTheme['yellow-dark']} />
                  <Styled.AddressLabelContainer>
                    <label htmlFor=""> Endereço de Entrega </label>
                    <span>
                      Informe o endereço de entrega para receber seu pedido
                    </span>
                  </Styled.AddressLabelContainer>
                </Styled.AddressInfoContainer>
                <Styled.AddressFieldsContainer>
                  <Styled.CEPInput placeholder="CEP" {...register('cep')} />
                  <Styled.StreetInput
                    placeholder="Rua"
                    {...register('streetAddress')}
                  />
                  <Styled.NumberComplementContainer>
                    <Styled.NumberInput
                      placeholder="Número"
                      {...register('streetNumber')}
                    />
                    <Styled.ComplementInput
                      placeholder="Complemento                                                 Opcional"
                      {...register('streetComplement')}
                    />
                  </Styled.NumberComplementContainer>
                  <Styled.NeighborhoodCityUFContainer>
                    <Styled.NeighborhoodInput
                      placeholder="Bairro"
                      {...register('neighborhood')}
                    />
                    <Styled.CityInput
                      placeholder="Cidade"
                      {...register('city')}
                    />
                    <Styled.UFInput placeholder="UF" {...register('uf')} />
                  </Styled.NeighborhoodCityUFContainer>
                </Styled.AddressFieldsContainer>
              </Styled.FormContainer>
              <Styled.PaymentMethodContainer>
                <Styled.PaymentInfoHeaderContainer>
                  <CurrencyDollar size={20} color={defaultTheme.purple} />
                  <Styled.PaymentInfoTextContainer>
                    <span> Pagamento </span>
                    <span>
                      O pagamento é feito na entrega. Escolha a forma que deseja
                      pagar
                    </span>
                  </Styled.PaymentInfoTextContainer>
                </Styled.PaymentInfoHeaderContainer>
                <Styled.PaymentOptionsSelectContainer>
                  <Styled.PaymentOptionsSelector>
                    <input
                      type="radio"
                      value="Cartão de débito"
                      {...register('paymentMethod')}
                    />
                    <CreditCard size={16} color={defaultTheme.purple} />
                    Cartão de Crédito
                  </Styled.PaymentOptionsSelector>
                  <Styled.PaymentOptionsSelector>
                    <input
                      type="radio"
                      value="Cartão de crédito"
                      {...register('paymentMethod')}
                    />
                    <Bank size={16} color={defaultTheme.purple} />
                    Cartão de Débito
                  </Styled.PaymentOptionsSelector>
                  <Styled.PaymentOptionsSelector>
                    <input
                      type="radio"
                      value="Dinheiro"
                      {...register('paymentMethod')}
                    />
                    <Money size={16} color={defaultTheme.purple} />
                    Dinheiro
                  </Styled.PaymentOptionsSelector>
                </Styled.PaymentOptionsSelectContainer>
              </Styled.PaymentMethodContainer>
            </Styled.OrderDetailContainer>
            <Styled.CartCheckoutContainer>
              <h3>Cafés Selecionados</h3>
              <Styled.SelectedCoffeesBigContainer>
                {selectedCoffeesInCart}
                <Styled.OrderSummaryContainer>
                  <Styled.PricingContainer>
                    <Styled.BasePricingContainer>
                      <label htmlFor="">Total de Items</label>
                      <span>R$ {totalPrice.toFixed(2)}</span>
                    </Styled.BasePricingContainer>
                    <Styled.BasePricingContainer>
                      <label htmlFor="">Entrega</label>
                      <span> R$ {deliveryFee.toFixed(2)}</span>
                    </Styled.BasePricingContainer>
                    <Styled.GrandTotalPriceContainer>
                      <label htmlFor="">Total</label>
                      <span> R$ {grandTotalPrice.toFixed(2)}</span>
                    </Styled.GrandTotalPriceContainer>
                  </Styled.PricingContainer>
                </Styled.OrderSummaryContainer>
                <Styled.ConfirmOrderButton
                  type="submit"
                  disabled={isSubmitDisabled}
                >
                  Confirmar Pedido
                </Styled.ConfirmOrderButton>
              </Styled.SelectedCoffeesBigContainer>
            </Styled.CartCheckoutContainer>
          </Styled.MainCheckoutContainer>
        </form>
      </FormProvider>
    </>
  )
}
