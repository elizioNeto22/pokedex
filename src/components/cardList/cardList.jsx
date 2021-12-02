import React from 'react'
import CardItem from '../cardItem/cardItem'

import { CardListContainer } from './cardListStyles'

export const CardList = ({ pokemon }) => (
  <CardListContainer>
    {pokemon.map((pokemons) => (
      <CardItem key={pokemons.id} number={pokemons.num} name={pokemons.name} img={pokemons.img} type={pokemons.type} />
    ))}
  </CardListContainer>
)
