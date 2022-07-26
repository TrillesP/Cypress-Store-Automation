import { CurrencyDollar, MapPinLine, Timer } from 'phosphor-react'
import { useContext } from 'react'
import { OrderContext } from '@/contexts/OrderContext'
import { defaultTheme } from '@/styles/themes/default'
import * as Styles from './styles'
import ilustration from '@/assets/IllustrationCheckoutSuccess.svg'
export function CheckoutSuccess() {
  const { order } = useContext(OrderContext)
  return (
    <>
      <Styles.TitleAndInfoContainer>
        <h3> Uhu! Pedido confirmado </h3>
        <span> Agora é só aguardar que logo o café chegará até você </span>
      </Styles.TitleAndInfoContainer>
      <Styles.CardAndImageContainer>
        <Styles.DeliveryCardWrapper>
          <Styles.DeliveryInfoCard>
            <Styles.InfoSpan>
              <Styles.IconContainer>
                <Styles.PurpleWrapper>
                  <MapPinLine
                    size={28}
                    weight={'fill'}
                    color={defaultTheme.white}
                  />
                </Styles.PurpleWrapper>
              </Styles.IconContainer>
              <Styles.TextContainer>
                <span>
                  {`Entrega em `}
                  <b>{`${order.streetAddress}, ${order.streetNumber}`}</b>
                </span>
                {`${order.neighborhood} - ${order.city}, ${order.uf}`}
              </Styles.TextContainer>
            </Styles.InfoSpan>
            <Styles.InfoSpan>
              <Styles.IconContainer>
                <Styles.YellowWrapper>
                  <Timer size={28} weight={'fill'} color={defaultTheme.white} />
                </Styles.YellowWrapper>
              </Styles.IconContainer>
              <Styles.TextContainer>
                <span>Previsão de entrega:</span>
                <strong> 20 - 30 minutos </strong>
              </Styles.TextContainer>
            </Styles.InfoSpan>
            <Styles.InfoSpan>
              <Styles.IconContainer>
                <Styles.OrangeWrapper>
                  <CurrencyDollar
                    size={28}
                    weight={'fill'}
                    color={defaultTheme.white}
                  />
                </Styles.OrangeWrapper>
              </Styles.IconContainer>
              <Styles.TextContainer>
                <span>Pagamento na entrega</span>
                <strong>{`${order.paymentMethod}`}</strong>
              </Styles.TextContainer>
            </Styles.InfoSpan>
          </Styles.DeliveryInfoCard>
        </Styles.DeliveryCardWrapper>
        <Styles.IllustrationContainer>
          <img src={ilustration} alt="" />
        </Styles.IllustrationContainer>
      </Styles.CardAndImageContainer>
    </>
  )
}
