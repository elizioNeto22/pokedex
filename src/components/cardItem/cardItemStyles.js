import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 250px;
  margin: 25px 0px;
  transition: 0.5s;
  box-shadow: 0px 5px 5px 0px #00000015;
  padding: 10px;
  :hover {
    box-shadow: 0px 5px 5px 0px #00000040;
  }
`

export const CardImage = styled.img`
  width: 180px;
  height: 180px;
  background-color: #f8f8f8;
  border: none;
  border-radius: 5px;
  padding: 25px;
  margin: 0px 10px;
  cursor: pointer;
  -moz-osx-font-smoothing: grayscale;
  backface-visibility: hidden;
  transform: translateZ(0);
  transition: transform 0.25s ease-out;
  :hover {
    transform: scale(1.03);
  }
`

export const PokemonInfo = styled.div`
  margin-left: 20px;
`

export const PokemonNumber = styled.p`
  margin: 0px;
  font-size: 10px;
`

export const PokemonName = styled.h3`
  margin: 5px 0px 0px 0px;
`

export const PokemonTypeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 65%;
  @media only screen and (max-width: 37.5rem) {
    width: 70%;
  }
`

export const PokemonTypeText = styled.p`
  margin: 0px;
  font-size: 12px;
  background: #f2f2f2;
  padding: 2px 20px;
  border-radius: 5px;
  border: none;
`
