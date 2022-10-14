import './pokemonCard.css'
import React from 'react'
import Squirtle from './squirtle.png'
import { useSelector } from 'react-redux'
import { LoadingIndicators } from '../../constants/constants'
import { getPokemonListObject } from '../../redux/selector/pokemonListSelector'


const PokemonCard = () => {

  const { loading, pokemonListResponse, pokemonListError } = useSelector(getPokemonListObject)
  return (
    <div className='pokemonList'>
        <div className='pokemonCard'>
            <img className='pokemonImg' alt='Pokemon' src={Squirtle}>
            </img>
            <p className='pokemonLabel'>Squirtle</p>
            <p className='pokemonId'>001</p>
        </div>
        <div className='pokemonCard'>
            <img className='pokemonImg' alt='Pokemon' src={Squirtle}>
            </img>
            <p className='pokemonLabel'>Squirtle</p>
            <p className='pokemonId'>001</p>
        </div>
    </div>
  )
}

export default PokemonCard