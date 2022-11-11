import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import PokemonCard from './PokemonCard'

import { getPokemonListObject } from '../../redux/selector/pokemonListSelector'
import { getFilterObject } from '../../redux/selector/filterSelector'
import { getTypesDataObject } from '../../redux/selector/typesDataSelector'
import { getGenderDataObject } from '../../redux/selector/genderDataSelector'
import { filteredPokemonList } from '../../utilities/filterData' 
import { LoadingIndicators } from '../../constants/constants'
import './css/pokemonList.css'

const PokemonList = () => {
    const { loading, pokemonListResponse, pokemonListError, searchValue, pokemonSearchResults } = useSelector(getPokemonListObject)
    const pokemonListResult = pokemonListResponse?.results;

    const { filterList } = useSelector(getFilterObject);
    const { typesData } = useSelector(getTypesDataObject);
    const { genderData } = useSelector(getGenderDataObject);

    const [displayData, setDisplayData] = useState(pokemonListResult);
    // console.log(pokemonListResponse);


    useEffect(()=>{
        if (searchValue?.length === 0) {
            setDisplayData(filteredPokemonList(pokemonListResult,filterList,typesData,genderData))
        } else {
            setDisplayData(filteredPokemonList(pokemonSearchResults,filterList,typesData,genderData))
        }
    },[pokemonListResponse,filterList,typesData,genderData,searchValue,pokemonSearchResults])

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