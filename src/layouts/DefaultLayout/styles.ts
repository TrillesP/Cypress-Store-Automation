import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 80%;
  min-width: 1440px;
  height: 100%;
  width: 100%;
  /* margin: 2rem auto; */
  /* padding: 2.5rem; */
  margin: 0 auto;

  background: ${(props) => props.theme.background};

  display: flex;
  flex-direction: column;
  /* justify-content: flex-start; */
  /* align-items: center; */
  flex: 1;
`
