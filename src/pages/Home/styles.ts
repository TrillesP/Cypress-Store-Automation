import styled from 'styled-components'
import IntroBackground from '../../assets/IntroBackground.svg'

export const HomeContainer = styled.main`
  /* flex: 1; */
  flex-wrap: wrap;
  justify-content: center;
  /* align-items: center; */
  display: flex;
  flex: wrap;
  /* width: 100%; */
  flex-direction: column;
  height: 100%;

  /* margin: 0 auto; */
  h2 {
    font-size: 48px;
    font-style: normal;
    font-weight: 800;
    font-family: 'Baloo 2';
    line-height: 130%;
    padding: 92px 10rem 0px 10rem;
  }
`

export const IntroContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-image: url(${IntroBackground});

  justify-content: space-between;
  padding: 5.75rem 10rem 5.75rem 10rem;
  gap: 56px;

  img {
    max-width: 100%;
    width: 476px;
    height: 360px;
  }

  h1 {
    font-size: 48px;
    font-style: normal;
    font-weight: 800;
    font-family: 'Baloo 2';
    line-height: 130%;
  }
  p {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 20px;
  }
`
// export const InfoContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//
//   justify-content: space-between;
//   padding: 5.75rem 10rem 5.75rem 10rem;
//   gap: 56px;

//   h1 {
//     font-size: 48px;
//     font-style: normal;
//     font-weight: 800;
//     font-family: 'Baloo 2';
//     line-height: 130%;
//   }
//   p {
//     font-family: 'Roboto', sans-serif;
//     font-weight: 400;
//     font-size: 20px;
//   }
// `
export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 6px;
  gap: 67px;
`

export const MainTextInfo = styled.div`
  width: 36.75rem;
  font-size: 16px;
`

export const InfoItems = styled.div`
  width: 36.75rem;

  display: flex;
  flex-direction: row;
  gap: 40px;
  /* flex-wrap: 1; */
`
export const BaseInfoItems = styled.div``

export const InfoItemsCol1 = styled(BaseInfoItems)`
  display: flex;
  flex-direction: column;
`
export const InfoItemsCol2 = styled(BaseInfoItems)`
  display: flex;
  flex-direction: column;
  padding-left: 16px;
`

export const InfoSpan = styled.span`
  display: flex;
  flex-direction: row;
  /* justify-content: center; */
  align-items: center;
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
export const YellowWrapper = styled(BaseIconWrapper)`
  background: ${(props) => props.theme.yellow};
`
export const OrangeWrapper = styled(BaseIconWrapper)`
  background: ${(props) => props.theme['yellow-dark']};
`
export const BlackWrapper = styled(BaseIconWrapper)`
  background: ${(props) => props.theme['base-title']};
`
export const PurpleWrapper = styled(BaseIconWrapper)`
  background: ${(props) => props.theme.purple};
`
