import styled from 'styled-components'

export const CardListContainer = styled.div`
  width: 50vw;
  padding: 0px;
  margin: 50px 20%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 5px;
  @media only screen and (max-width: 37.5rem) {
    grid-template-columns: 1fr;
  }
`
