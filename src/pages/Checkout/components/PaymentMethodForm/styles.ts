import styled from 'styled-components'

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
  button {
    width: 178.67px;
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
      cursor: pointer;
    }
  }
`
