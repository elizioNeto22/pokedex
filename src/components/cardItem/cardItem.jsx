import React from 'react'

import {
  CardContainer,
  CardImage,
  PokemonInfo,
  PokemonName,
  PokemonNumber,
  PokemonTypeContainer,
  PokemonTypeText,
} from './cardItemStyles'

const CardItem = ({ id, number, name, img, type }) => (
  <CardContainer>
    <CardImage src={img} alt={name} />
    <PokemonInfo>
      <PokemonNumber>{`#${number}`}</PokemonNumber>
      <PokemonName>{name}</PokemonName>
      <PokemonTypeContainer>
        {type.map((types) => (
          <PokemonTypeText>{types}</PokemonTypeText>
        ))}
      </PokemonTypeContainer>
    </PokemonInfo>
  </CardContainer>
)

export default CardItem
