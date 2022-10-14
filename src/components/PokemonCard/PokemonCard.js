import './pokemonCard.css'
import React, { useState } from 'react'
import Squirtle from './squirtle.png'
import { useSelector } from 'react-redux'
import { LoadingIndicators } from '../../constants/constants'
import { getPokemonListObject } from '../../redux/selector/pokemonListSelector'
import axios from 'axios';

const PokemonCard = () => {

  const { loading, pokemonListResponse, pokemonListError } = useSelector(getPokemonListObject)
  const pokemonListResult = pokemonListResponse.results;
  // console.log(pokemonListResponse.results);

  return (
    <div className='pokemonList'>
      { 
         pokemonListResult?.map((pokemon,index) => {
          let url = pokemon.url
          let id = axios
          .get(url)
          .then((response) => {
              let pokemonId = response.data.id
              return pokemonId
          })
          .catch((error) => console.log(error))
          
          return (  
          <div className='pokemonCard' key={index}>
              <img className='pokemonImg' alt='Pokemon' src={Squirtle} />
              <p className='pokemonLabel'>{ pokemon.name }</p>
              <p className='pokemonId'>001</p>
          </div>
         )
        })
      }
    </div> 
  )
}

export default PokemonCard