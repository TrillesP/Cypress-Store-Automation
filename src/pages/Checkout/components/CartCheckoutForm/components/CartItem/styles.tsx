import styled from 'styled-components'

export const CartItemWrapper = styled.div``

export const CartItemContainer = styled.div`
  /* border-style: solid; */
  display: flex;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px 4px;
  gap: 59px;
  img {
    width: 64px;
    height: 64px;
  }
`

export const Separator = styled.div`
  border: 1px solid #e6e5e5;
  width: 368px;
  margin-top: 24px;
`

export const CoffeeDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  /* border-style: solid; */
`

export const CoffeeActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;

  width: 171px;
  height: 32px;
  button {
    display: flex;
    flex-direction: column;
  }
`

export const AddAndRemoveCounter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 8px;
  gap: 4px;
  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;

  height: 32px;

  button {
    background: ${(props) => props.theme['base-button']};
    border-style: none;
    &:hover {
      cursor: pointer;
    }
  }
  span {
    width: 1.25rem;
    height: 1.3125rem;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    text-align: center;
  }
`

export const RemoveFromCartButton = styled.div`
  display: flex;
  flex-direction: row;
  width: 5.6875rem;
  justify-content: center;
  align-items: center;
  padding: 0px 8px 0px 8px;
  gap: 4px;
  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  /* border-style: solid; */

  width: 150px;
  height: 32px;
  &:hover {
    cursor: pointer;
  }
`

export const CoffeePrice = styled.span`
  width: 55px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 130%;

  display: flex;
  align-items: center;
  text-align: right;
`
