import './pokemonCard.css'
import React, { useEffect, useState } from 'react'
import { LoadingIndicators } from '../../constants/constants'
import axios from 'axios';
import { calculateColorCode } from '../../utilities/calculateColorCode';
import Modal from '../Modal/Modal';

const PokemonCard = (props) => {
  
  const { name, id, types, sprites } = props?.pokemon;
  const [ pokemonDetails, setPokemonDetails ] = useState({});
  const [ open, setOpen ] = useState('');
  // const handleOpen = () => setOpen(true);

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
    <div 
      className='pokemonCard' 
      style={backgroundStyle} 
      onClick={(event) => {
				  if(!open) setOpen(event.target.id);
			  }}
      id={pokemonId}>
          <img className='pokemonImg' alt='Pokemon' src={imageUrl} id={pokemonId}/>
          <p className='pokemonLabel' id={pokemonId}>{name}</p>
          <p className='pokemonId' id={pokemonId}>{pokemonId}</p>
          {/* {console.log(open)} */}
          <Modal open={open} setOpen={setOpen}/>
    </div>     
  )
}

export default PokemonCard