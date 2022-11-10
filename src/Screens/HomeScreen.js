import React, { useState } from 'react'
import './HomeScreen.css'
import Header from '../components/Header/Header'
import SearchBar from '../components/SearchBar/SearchBar'
import CustomSelectContainer from '../components/SelectDropdown/CustomSelectContainer'
import FilterButton from '../components/FilterButton/FilterButton'
import PokemonList from '../components/PokemonCard/PokemonList'
import FilterModal from '../components/FilterButton/FilterModal'

const HomeScreen = () => {
  const [filterModalOpen, setFilterModalOpen] = useState(false);

  return (
    <div className='homeScreen'>
        <Header/>
        <div className='searchFilter'>
          <SearchBar />
          <CustomSelectContainer />
          <FilterButton handleModal={() => setFilterModalOpen(true)}/>
        </div>  
        <PokemonList />
        <FilterModal open={filterModalOpen} setOpen={setFilterModalOpen} />
    </div>
  )
}

export default HomeScreen