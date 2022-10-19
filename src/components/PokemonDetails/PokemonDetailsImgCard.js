import React from 'react'

const PokemonDetailsImgCard = ( {url, backgroundColor, id} ) => {
  return (
    <div 
        style={{
            backgroundImage: backgroundColor,
            backgroundColor: backgroundColor
        }}
        className='pokemonCard2' 
    >
        <img className='pokemonImg' src={url} alt='Pokemon' id={id} />        
    </div>
  )
}

export default PokemonDetailsImgCard