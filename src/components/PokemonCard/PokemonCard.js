import './pokemonCard.css'
import React, { useEffect, useState } from 'react'
import { LoadingIndicators } from '../../constants/constants'
import axios from 'axios';
import { calculateColorCode } from '../../utilities/calculateColorCode';

const PokemonCard = (props) => {
  
  const { name, id, types, sprites } = props?.pokemon;
  const [ pokemonDetails, setPokemonDetails ] = useState({})

  useEffect( () => {
    if(props?.pokemonUrl){
      axios
        .get(props?.pokemonUrl)
        .then((details) => {
          setPokemonDetails(details?.data)
        })
        .catch((error) => {
          setPokemonDetails({})
        })
    }
  }, [props?.pokemonUrl])

  const imageUrl = pokemonDetails?.sprites?.other?.dream_world?.front_default;
  const pokemonId = String(pokemonDetails?.id).padStart(3,'0');
  const type = pokemonDetails.types

  const backgroundStyle = {
    backgroundColor: type?.length === 1  && calculateColorCode(type),
    backgroundImage: type?.length > 1 ? calculateColorCode(type) : null
  }

  return (
    <div className='pokemonCard' style={backgroundStyle}>
      <img className='pokemonImg' alt='Pokemon' src={imageUrl} />
      <p className='pokemonLabel'>{name}</p>
      <p className='pokemonId'>{pokemonId}</p>
    </div>     
  )
}

export default PokemonCard