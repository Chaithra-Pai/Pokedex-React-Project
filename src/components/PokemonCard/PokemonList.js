import './pokemonList.css'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { LoadingIndicators } from '../../constants/constants'
import { getPokemonListObject } from '../../redux/selector/pokemonListSelector'
import PokemonCard from './PokemonCard'
import { getFilterObject } from '../../redux/selector/filterSelector'
import { getTypesDataObject } from '../../redux/selector/typesDataSelector'
import { getGenderDataObject } from '../../redux/selector/genderDataSelector'
import { filteredPokemonList } from '../../utilities/filterData' 

const PokemonList = () => {
    const { loading, pokemonListResponse, pokemonListError } = useSelector(getPokemonListObject)
    const pokemonListResult = pokemonListResponse?.results;

    const { filterList } = useSelector(getFilterObject);
    const { typesData } = useSelector(getTypesDataObject);
    const { genderData } = useSelector(getGenderDataObject);

    const [displayData, setDisplayData] = useState(pokemonListResult);
    // console.log(filterList);


    useEffect(()=>{
        setDisplayData(pokemonListResult)
         setDisplayData(filteredPokemonList(pokemonListResult,filterList,typesData,genderData))
    },[pokemonListResponse,filterList,typesData,genderData])

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