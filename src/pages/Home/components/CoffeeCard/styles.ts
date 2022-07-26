import styled from 'styled-components'

export const CoffeeCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 16.5625rem;
  height: 19.375rem;
  border-radius: 6px 36px;
  background: ${(props) => props.theme['base-card']};
  /* padding: 20px 0px 0px 0px; */
  margin-top: 40px;
  img {
    position: relative;
    top: -20px;
    width: 7.5rem;
    height: 7.5rem;
  }
`

export const CoffeeFlavorPills = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 4px;

  span {
    height: 13px;
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0.5rem 0.25rem;

    border-radius: 100px;

    color: ${(props) => props.theme['yellow-dark']};
    background: ${(props) => props.theme['yellow-light']};

    font-family: 'Roboto';
    font-size: 0.625rem;
    font-weight: 700;
    line-height: 130%;
    text-transform: uppercase;
  }
`

export const CoffeeDescDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 1rem 1.25rem 2.0625rem 1.25rem;
`

export const CoffeeBuyDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  gap: 0.5rem;
  padding: 0px 24px 20px 24px;
  button {
    border-style: none;
  }
  p {
    font-family: 'Roboto';
    font-size: 14px;
    font-weight: 700;
    line-height: 1.1375rem;
  }
`
export const CoffeePrice = styled.span`
  font-family: 'Baloo 2';
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 130%;
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

  button {
    background: ${(props) => props.theme['base-button']};
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
export const PlusAndMinusButton = styled.button`
  color: ${(props) => props.theme['purple-dark']};
  &:hover {
    color: ${(props) => props.theme.purple};
  }
`

export const AddToCartButton = styled.button`
  width: 38px;
  height: 38px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme.white};
  padding: 8px;
  gap: 8px;
  border-radius: 6px;

  &:hover {
    cursor: pointer;
    background: ${(props) => props.theme.purple};
  }
`
