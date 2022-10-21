import React, { useEffect, useState } from 'react'
import './css/PokemonDetails.css'

import PokemonDetailsImgCard from './PokemonDetailsImgCard'
import DetailsHeaderDesktop from './DetailsHeaderDesktop'
import DetailsHeaderMobile from './DetailsHeaderMobile'
import DetailsDescription from './DetailsDescription'
import DetailsFooter from './DetailsFooter'
import { calculateColorCode } from '../../utilities/calculateColorCode'

import { useSelector, useDispatch } from 'react-redux'
import { getPokemonDetailsObject } from '../../redux/selector/pokemonDetailsSelector'
import {
  fetchPokemonDetailsApiCall,
  fetchPokemonDescriptionApiCall,
  clearPokemonDetails
} from '../../redux/actionContainer/actionCreators/pokemonDetailsActionCreators'
import { getGenderDataObject } from '../../redux/selector/genderDataSelector'
import { getTypesDataObject } from '../../redux/selector/typesDataSelector'
import { FormatPokemonDetails } from '../../utilities/formatData'


const PokemonDetails = ({ handleClose, id }) => {
  const dispatch = useDispatch();
  const { pokemonDetailsResponse, pokemonDescription } =useSelector(getPokemonDetailsObject)
  const { genderData } = useSelector(getGenderDataObject);
  const { damageData } = useSelector(getTypesDataObject);

  const [pokemonDetails,setPokemonDetails] = useState([])
  // console.log(damageData);

  useEffect(() => {
    dispatch(fetchPokemonDetailsApiCall(id))
    dispatch(fetchPokemonDescriptionApiCall(id))
    return () => dispatch(clearPokemonDetails())
  }, [])

  useEffect(()=>{
    setPokemonDetails(pokemonDetailsResponse)
  },[pokemonDetailsResponse])

  const height = ((pokemonDetails?.height / 10 ) * 3.2808).toFixed(1);
  const weight = pokemonDetails?.weight / 10;
  const egg_groups = pokemonDescription.egg_groups;
  const pokemonId = String(pokemonDetails?.id).padStart(3,'0');
  const abilities = pokemonDetails?.abilities;
  const types = pokemonDetails?.types;
  const url = pokemonDetails?.sprites?.other?.dream_world?.front_default || '';
  const { genderDataArray, weakness } = FormatPokemonDetails(pokemonDetails?.name, pokemonDetails?.types, genderData, damageData)

  // console.log(weakness);

  return (
    <div className='pokemonDetailsContainer'>
        <DetailsHeaderMobile name={pokemonDetails?.name} id={pokemonId} handleClose={handleClose}/>
        <div className='pokemonContainer2'>
            <PokemonDetailsImgCard url={url} backgroundColor={calculateColorCode(pokemonDetails?.types || [])} id={pokemonId}/>
            <div>
                <DetailsHeaderDesktop name={pokemonDetails?.name} id={pokemonId} handleClose={handleClose}/>
                <DetailsDescription pokemonDescription={pokemonDescription} id={id}/>
            </div>
        </div> 
        <DetailsFooter height={height} weight={weight} egg_groups={egg_groups} abilities={abilities} types={types} genderDataArray={genderDataArray} weakness={weakness}/>

    </div>
  )
}

export default PokemonDetails