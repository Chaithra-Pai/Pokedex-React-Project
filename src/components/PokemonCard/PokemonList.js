import './pokemonList.css'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { LoadingIndicators } from '../../constants/constants'
import { getPokemonListObject } from '../../redux/selector/pokemonListSelector'
import PokemonCard from './PokemonCard'

const PokemonList = () => {
    const { loading, pokemonListResponse, pokemonListError } = useSelector(getPokemonListObject)
    const pokemonListResult = pokemonListResponse?.results;
    const [displayData, setDisplayData] = useState(pokemonListResult);
    //console.log(pokemonListResponse);

    useEffect(()=>{
        setDisplayData(pokemonListResult)
    },[pokemonListResponse])

    return (
        <div className='pokemonList'>
            {
                displayData && 
                    displayData?.map((pokemon) => {
                        return (
                            <PokemonCard pokemon={pokemon} pokemonUrl={pokemon?.url} key={pokemon?.name} />
                        )
                })
            }
        </div>
    )
}

export default PokemonList