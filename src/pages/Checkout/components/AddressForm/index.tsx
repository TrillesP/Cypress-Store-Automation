import { MapPinLine } from 'phosphor-react'
import { defaultTheme } from '../../../../styles/themes/default'
import {
  AddressFieldsContainer,
  AddressInfoContainer,
  AddressLabelContainer,
  CEPInput,
  CityInput,
  ComplementInput,
  FormContainer,
  NeighborhoodCityUFContainer,
  NeighborhoodInput,
  NumberComplementContainer,
  NumberInput,
  StreetInput,
  UFInput,
} from './styles'

export function AddressForm() {
  return (
    <FormContainer>
      <h3>Complete seu pedido</h3>
      <form action="">
        <AddressInfoContainer>
          <MapPinLine size={22} color={defaultTheme['yellow-dark']} />
          <AddressLabelContainer>
            <label htmlFor=""> Endereço de Entrega </label>
            <span> Informe o endereço de entrega para receber seu pedido </span>
          </AddressLabelContainer>
        </AddressInfoContainer>
        <AddressFieldsContainer>
          <CEPInput placeholder="CEP" />
          <StreetInput placeholder="Rua" />
          <NumberComplementContainer>
            <NumberInput placeholder="Número" />
            <ComplementInput placeholder="Complemento                                                  Opcional" />
          </NumberComplementContainer>
          <NeighborhoodCityUFContainer>
            <NeighborhoodInput placeholder="Bairro" />
            <CityInput placeholder="Cidade" />
            <UFInput placeholder="UF" />
          </NeighborhoodCityUFContainer>
        </AddressFieldsContainer>
      </form>
    </FormContainer>
  )
}
