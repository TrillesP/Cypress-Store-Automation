import { CurrencyDollar, MapPinLine, Timer } from 'phosphor-react'
import { useContext } from 'react'
import { OrderContext } from '../../contexts/OrderContext'
import { defaultTheme } from '../../styles/themes/default'
import {
  CardAndImageContainer,
  DeliveryInfoCard,
  InfoSpan,
  OrangeWrapper,
  PurpleWrapper,
  TitleAndInfoContainer,
  YellowWrapper,
} from './styles'

export function CheckoutSuccess() {
  const { order } = useContext(OrderContext)
  return (
    <>
      <TitleAndInfoContainer>
        <h3> Uhu! Pedido confirmado </h3>
        <span> Agora é só aguardar que logo o café chegará até você </span>
      </TitleAndInfoContainer>
      <CardAndImageContainer>
        <DeliveryInfoCard>
          <InfoSpan>
            <PurpleWrapper>
              <MapPinLine
                size={28}
                weight={'fill'}
                color={defaultTheme.white}
              />
            </PurpleWrapper>
            {`Entrega em ${order.streetAddress}, ${order.streetNumber}`}
            <strong>{`${order.neighborhood} ${order.city}-${order.uf}`}</strong>
          </InfoSpan>
          <InfoSpan>
            <div>
              <YellowWrapper>
                <Timer size={28} weight={'fill'} color={defaultTheme.white} />
              </YellowWrapper>
              <p>Previsão de entrega:</p>
            </div>
            <strong> 20 - 30 minutos </strong>
          </InfoSpan>
          <InfoSpan>
            <OrangeWrapper>
              <CurrencyDollar
                size={28}
                weight={'fill'}
                color={defaultTheme.white}
              />
            </OrangeWrapper>
            Pagamento na entrega <strong>{`${order.paymentMethod}`}</strong>
          </InfoSpan>
        </DeliveryInfoCard>
        <div> div com a img </div>
      </CardAndImageContainer>
    </>
  )
}
