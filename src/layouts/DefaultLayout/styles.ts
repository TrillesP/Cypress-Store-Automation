import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: flex;
  flex: wrap;
  max-width: 100%;
  height: 100%;
  /* width: 100%; */
  min-height: 100%;
  box-sizing: border-box;
  /* margin: 2rem auto; */
  /* padding: 2.5rem; */
  margin: 0 auto;

  background: ${(props) => props.theme.background};
  flex-direction: column;
  /* justify-content: flex-start; */
  /* align-items: center; */
  /* flex: 1; */
`
