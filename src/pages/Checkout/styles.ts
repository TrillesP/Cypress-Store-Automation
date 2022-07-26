import styled from 'styled-components'

export const MainCheckoutContainer = styled.div`
  display: flex;
  min-width: 1340px;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: row;
  margin: 55px 160px 0px 160px;
`

export const OrderDetailContainer = styled.div``

export const FormContainer = styled.div`
  border-radius: 6px;
  padding: 20px 40px 40px 40px;
  gap: 32px;
  width: 640px;
  background: ${(props) => props.theme['base-card']};
  top: -30px;

  h3 {
    align-items: flex-start;
    position: relative;
    top: -50px;
    left: -40px;
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 130%;
  }
`

export const AddressInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 8px;
  padding: 0px 0px 32px 0px;
  justify-content: flex-start;
`

export const AddressLabelContainer = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }

  label {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    color: ${(props) => props.theme['base-text']};
  }
`

export const AddressFieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`

export const BaseInput = styled.input`
  height: 42px;

  background: ${(props) => props.theme['base-input']};
  padding: 12px;
  gap: 4px;
  border: 1px solid #e6e5e5;
  border-radius: 4px;
`

export const CEPInput = styled(BaseInput)``

export const StreetInput = styled(BaseInput)`
  width: 35rem;
`
export const NumberComplementContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 12px;
  width: 560px;
`

export const NumberInput = styled(BaseInput)`
  width: 12.5rem;
`

export const ComplementInput = styled(BaseInput)`
  width: 348px;
`
export const NeighborhoodCityUFContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 12px;

  width: 560px;
  height: 42px;
`

export const NeighborhoodInput = styled(BaseInput)`
  width: 12.5rem;
`

export const CityInput = styled(BaseInput)`
  width: 17.25rem;
`

export const UFInput = styled(BaseInput)`
  width: 3.75rem;
`

// Payment Method Styling

export const PaymentMethodContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-top: 32px;
  background: ${(props) => props.theme['base-card']};
  padding: 40px;
  gap: 32px;
  border-radius: 6px;
`

export const PaymentInfoHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
`

export const PaymentInfoTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 2px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
`
export const PaymentOptionsSelectContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 12px;
`

export const PaymentOptionsSelector = styled.div`
  width: 180.67px;
  height: 51px;
  background: ${(props) => props.theme['base-button']};
  border: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 16px;
  gap: 12px;
  border: 1px solid #8047f8;
  border-radius: 6px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 160%;
  text-transform: uppercase;

  &:hover {
    /* cursor: pointer; */
  }

  input {
    position: absolute;
    opacity: 0.01;
    z-index: 100;
    height: 100px;
    width: 150px;
    &:hover {
      cursor: pointer;
    }
  }
`

// Cart Items Card and children styling

export const CartCheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme['base-card']};
  padding: 0px 40px 40px 40px;
  margin-left: 2rem;
  margin-right: 10rem;
  border-radius: 0.375rem 2.75rem;

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

  &:hover {
    cursor: pointer;
  }
`
export const BasePricingContainer = styled.div`
  display: flex;
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

  font-size: 16px;
  line-height: 130%;
`

export const PricingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
  align-items: flex-start;
`
export const OrderSummaryContainer = styled.div`
  margin: 24px;
  gap: 12px;
`
export const GrandTotalPriceContainer = styled(BasePricingContainer)`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 130%;
`
