import styled from 'styled-components'

export const FormContainer = styled.div``

export const AddressInfoContainer = styled.div`
  border-style: solid;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 8px;
  padding: 40px 0px 32px 0px;
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
  border-style: solid;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`

export const NeighborhoodCityUFContainer = styled.div``

export const NumberComplementContainer = styled.div``

export const BaseInput = styled.input`
  height: 42px;

  padding: 12px;
  gap: 4px;
  border: 1px solid #e6e5e5;
  border-radius: 4px;
`

export const CEPInput = styled(BaseInput)``

export const StreetInput = styled(BaseInput)``

export const NumberInput = styled(BaseInput)``

export const ComplementInput = styled(BaseInput)``

export const NeighborhoodInput = styled(BaseInput)``

export const CityInput = styled(BaseInput)``

export const UFInput = styled(BaseInput)``
