import React from 'react'
import DetailsHeader from './DetailsHeader'
import './css/PokemonDetails.css'
import DetailsContainer from './DetailsContainer'

const PokemonDetails = ({ handleClose }) => {
  return (
    <div className='pokemonDetailsContainer'>
        <DetailsContainer handleClose={handleClose}/>
    </div>
  )
}

export default PokemonDetails