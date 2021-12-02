import React from 'react'

import { SearchBoxInput, SubmitButton } from './searchBoxStyles'

const SearchBox = ({ onSearchChange }) => (
  <form onSubmit={(e) => e.preventDefault()}>
    <SearchBoxInput type="search" placeholder="search pokemons" onChange={onSearchChange} />
    <SubmitButton type="submit">
      <i className="fas fa-search"></i>
    </SubmitButton>
  </form>
)

export default SearchBox
