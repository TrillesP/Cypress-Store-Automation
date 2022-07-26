import { CurrencyDollar, MapPinLine, Timer } from 'phosphor-react'
import { useContext } from 'react'
import { OrderContext } from '../../contexts/OrderContext'
import { defaultTheme } from '../../styles/themes/default'
import {
  CardAndImageContainer,
  DeliveryCardWrapper,
  DeliveryInfoCard,
  IconContainer,
  IllustrationContainer,
  InfoSpan,
  OrangeWrapper,
  PurpleWrapper,
  TextContainer,
  TitleAndInfoContainer,
  YellowWrapper,
} from './styles'
import ilustration from '../../assets/IllustrationCheckoutSuccess.svg'
export function CheckoutSuccess() {
  const { order } = useContext(OrderContext)
  return (
    <>
      <TitleAndInfoContainer>
        <h3> Uhu! Pedido confirmado </h3>
        <span> Agora é só aguardar que logo o café chegará até você </span>
      </TitleAndInfoContainer>
      <CardAndImageContainer>
        <DeliveryCardWrapper>
          <DeliveryInfoCard>
            <InfoSpan>
              <IconContainer>
                <PurpleWrapper>
                  <MapPinLine
                    size={28}
                    weight={'fill'}
                    color={defaultTheme.white}
                  />
                </PurpleWrapper>
              </IconContainer>
              <TextContainer>
                <span>
                  {`Entrega em `}
                  <b>{`${order.streetAddress}, ${order.streetNumber}`}</b>
                </span>
                {`${order.neighborhood} - ${order.city}, ${order.uf}`}
              </TextContainer>
            </InfoSpan>
            <InfoSpan>
              <IconContainer>
                <YellowWrapper>
                  <Timer size={28} weight={'fill'} color={defaultTheme.white} />
                </YellowWrapper>
              </IconContainer>
              <TextContainer>
                <span>Previsão de entrega:</span>
                <strong> 20 - 30 minutos </strong>
              </TextContainer>
            </InfoSpan>
            <InfoSpan>
              <IconContainer>
                <OrangeWrapper>
                  <CurrencyDollar
                    size={28}
                    weight={'fill'}
                    color={defaultTheme.white}
                  />
                </OrangeWrapper>
              </IconContainer>
              <TextContainer>
                <span>Pagamento na entrega</span>
                <strong>{`${order.paymentMethod}`}</strong>
              </TextContainer>
            </InfoSpan>
          </DeliveryInfoCard>
        </DeliveryCardWrapper>
        <IllustrationContainer>
          <img src={ilustration} alt="" />
        </IllustrationContainer>
      </CardAndImageContainer>
    </>
  )
}
