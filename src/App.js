import React, { useState, useEffect } from 'react'

import SearchContainer from './components/searchContainer/searchContainer'
import { CardList } from './components/cardList/cardList'

import './App.css'

const App = () => {
  const [pokemons, setPokemons] = useState([])
  const [searchPokemon, setSearchPokemon] = useState('')

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json')
      .then((res) => res.json())
      .then((pokemons) => setPokemons(pokemons.pokemon))
  }, [])

  const onSearchChange = (e) => setSearchPokemon(e.target.value)

  const filteredPokemons = pokemons.filter(
    (pokemon) => pokemon.name.toLowerCase().includes(searchPokemon.toLowerCase()) || pokemon.num.includes(searchPokemon)
  )

  return (
    <div>
      <SearchContainer onSearchChange={onSearchChange} />
      <CardList pokemon={filteredPokemons} />
    </div>
  )
}

export default App
