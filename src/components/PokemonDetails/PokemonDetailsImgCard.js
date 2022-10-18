import React from 'react'
import Squirtle from './squirtle.png'

const PokemonDetailsImgCard = () => {
  return (
    <div 
        className='pokemonCard2' 
    >
        <img className='pokemonImg' src={Squirtle} alt='Pokemon' id='001' />        
    </div>
  )
}

export default PokemonDetailsImgCard