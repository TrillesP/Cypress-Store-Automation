import styled from 'styled-components'

export const FormContainer = styled.div`
  /* border-style: solid; */
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
