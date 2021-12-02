import React from 'react'

import SearchBox from '../searchBox/searchBox'

import { SearchWrapper, SubContainer, Title, SubTitle } from './searchContainerStyles'

const SearchContainer = ({ onSearchChange }) => {
  return (
    <SearchWrapper>
      <Title>Pokédex</Title>
      <SubContainer>
        <SubTitle>Name or Number</SubTitle>
        <SearchBox onSearchChange={onSearchChange} />
      </SubContainer>
    </SearchWrapper>
  )
}

export default SearchContainer
