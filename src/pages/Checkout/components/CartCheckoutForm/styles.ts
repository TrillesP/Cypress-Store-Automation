import styled from 'styled-components'

export const CartCheckoutContainer = styled.div`
  top: -40px;
  /* height: 800; */
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: center;
  background-color: ${(props) => props.theme['base-card']};
  padding: 0px 40px 40px 40px;
  margin-left: 2rem;
  margin-right: 10rem;
  border-radius: 0.375rem 2.75rem;
  gap: 1.5rem;

  h3 {
    align-items: flex-start;
    position: relative;
    top: -30px;
    left: -160px;
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 130%;
  }
`
export const SelectedCoffeesBigContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: flex-end; */
  /* gap: 100px; */
  align-items: center;
`
export const ConfirmOrderButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 0.5rem;
  gap: 0.25rem;

  width: 23rem;
  height: 2.875rem;
  border-style: none;
  border-radius: 6px;
  background: ${(props) => props.theme.yellow};
  color: white;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 160%;

  text-transform: uppercase;
`
export const BasePricingContainer = styled.div`
  display: flex;
  /* border-style: solid; */
  flex-direction: row;
  justify-content: space-between;
  width: 368px;
  height: 21px;
  align-items: center;
  padding: 0px;
  gap: 8px;
  /* margin-bottom: 12px; */

  font-family: 'Roboto';
  font-style: normal;

  font-size: 14px;
  line-height: 130%;
`

export const PricingContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: flex-start; */
  align-items: flex-end;
`
export const OrderSummaryContainer = styled.div``

// export const TotalItemsPriceContainer = styled.div``
// export const DeliveryPriceContainer = styled.div``
export const GrandTotalPriceContainer = styled(BasePricingContainer)`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 130%;
`
