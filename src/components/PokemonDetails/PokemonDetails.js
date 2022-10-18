import React from 'react'
import DetailsHeader from './DetailsHeader'
import './css/PokemonDetails.css'

const PokemonDetails = ({ handleClose }) => {
  return (
    <div className='pokemonDetailsContainer'>
        <DetailsHeader handleClose={handleClose}/>
    </div>
  )
}

export default PokemonDetails