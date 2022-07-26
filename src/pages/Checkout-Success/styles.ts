import styled from 'styled-components'

export const TitleAndInfoContainer = styled.div`
  margin: 80px 159px 0px 159px;
  display: flex;
  flex-direction: column;
  gap: 4px;

  h3 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 130%;
    color: ${(props) => props.theme['yellow-dark']};
  }
  span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const CardAndImageContainer = styled.div`
  margin: 0px 160px 0px 160px;
  gap: 102px;
  justify-content: space-between;
  align-items: center;
  margin-left: 159px;
  display: flex;
  flex-direction: row;
`
export const DeliveryCardWrapper = styled.div`
  border-radius: 6px 36px;
  background: linear-gradient(to right, #dbac2c, #8047f8);
  border-image-slice: 1;
  padding: 1.75px;
  margin-top: 40px;
`

export const DeliveryInfoCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  gap: 32px;
  width: 600px;
  padding: 40px;
  border-radius: 6px 34px;
  border: 3px;
  background: ${(props) => props.theme.background};
`

export const InfoSpan = styled.span`
  display: flex;
  flex-direction: row;
  width: 526px;
  align-items: center;
  padding: 0px;
  gap: 12px;

  border-color: red;
  /* justify-content: center; */
  padding: 5px;
  gap: 12px;
`
export const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
`

export const BaseIconWrapper = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  border-radius: 10000px;
  align-items: center;
  justify-content: center;
  padding: 8px;
`

export const PurpleWrapper = styled(BaseIconWrapper)`
  background: ${(props) => props.theme.purple};
`

export const YellowWrapper = styled(BaseIconWrapper)`
  background: ${(props) => props.theme.yellow};
`

export const OrangeWrapper = styled(BaseIconWrapper)`
  background: ${(props) => props.theme['yellow-dark']};
`

export const IllustrationContainer = styled.div`
  img {
    width: 492px;
    height: 293px;
  }
`
