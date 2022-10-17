import React from 'react'
import './HomeScreen.css'
import Header from '../components/Header/Header'
import SearchBar from '../components/SearchBar/SearchBar'
import CustomSelectContainer from '../components/SelectDropdown/CustomSelectContainer'
import FilterButton from '../components/FilterButton/FilterButton'
import PokemonList from '../components/PokemonCard/PokemonList'

const HomeScreen = () => {
  return (
    <div className='homeScreen'>
        <Header/>
        <div className='searchFilter'>
          <SearchBar />
          <CustomSelectContainer />
          <FilterButton/>
        </div>  
        <PokemonList />
    </div>
  )
}

export default HomeScreen