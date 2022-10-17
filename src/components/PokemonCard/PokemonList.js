import './pokemonList.css'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { LoadingIndicators } from '../../constants/constants'
import { getPokemonListObject } from '../../redux/selector/pokemonListSelector'
import PokemonCard from './PokemonCard'

const PokemonList = () => {
    const { loading, pokemonListResponse, pokemonListError } = useSelector(getPokemonListObject)
    const pokemonListResult = pokemonListResponse?.results;

    return (
        <div className='pokemonList'>
            {
                pokemonListResult && 
                    pokemonListResult?.map((pokemon, index) => {
                        
                        return (
                            <PokemonCard pokemon={pokemon} pokemonUrl={pokemon?.url} key={index} />
                        )
                })
            }
        </div>
    )
}

export default PokemonList