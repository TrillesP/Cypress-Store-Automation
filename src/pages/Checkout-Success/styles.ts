import styled from 'styled-components'

export const TitleAndInfoContainer = styled.div`
  border-style: solid;
  margin: 0px 159px 0px 159px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const CardAndImageContainer = styled.div`
  margin: 0px 159px 0px 159px;
  border-style: solid;
  margin-left: 159px;
  display: flex;
  flex-direction: row;
`

export const DeliveryInfoCard = styled.div`
  display: flex;
  border-style: solid;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  gap: 32px;
  width: 600px;
  padding: 40px;
`

export const InfoSpan = styled.span`
  display: flex;
  flex-direction: column;
  width: 526px;
  align-items: center;
  padding: 0px;
  gap: 12px;
  border-style: solid;
  /* justify-content: center; */
  padding: 5px;
  gap: 12px;
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
  background: ${(props) => props.theme['yellow-light']};
`

export const OrangeWrapper = styled(BaseIconWrapper)`
  background: ${(props) => props.theme['yellow-dark']};
`
