import React from 'react'
import './HomeScreen.css'
import Header from '../components/Header/Header'
import SearchBar from '../components/SearchBar/SearchBar'
import CustomSelectContainer from '../components/SelectDropdown/CustomSelectContainer'
import FilterButton from '../components/FilterButton/FilterButton'
import PokemonCard from '../components/PokemonCard/PokemonCard'

const HomeScreen = () => {
  return (
    <div>
        <Header/>
        <div className='searchFilter'>
          <SearchBar />
          <CustomSelectContainer />
          <FilterButton/>
        </div>  
        <PokemonCard />
    </div>
  )
}

export default HomeScreen