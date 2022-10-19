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
import { FormatPokemonDetails } from '../../utilities/formatData'


const PokemonDetails = ({ handleClose, id }) => {
  const dispatch = useDispatch();
  const { pokemonDetailsResponse, pokemonDescription } =useSelector(getPokemonDetailsObject)
  const { genderMasterData } = useSelector(getGenderDataObject);
  const [pokemonDetails,setPokemonDetails] = useState([])
  console.log(genderMasterData);

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
  // console.log(types.length);
  // const { genderData } = FormatPokemonDetails(genderMasterData, pokemonDetails?.name)
  // console.log(genderData);

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
        <DetailsFooter height={height} weight={weight} egg_groups={egg_groups} abilities={abilities} types={types}/>
        {/* <DetailsFooter height={height} weight={weight} egg_groups={egg_groups} abilities={abilities} types={types} genderData={genderData}/> */}

    </div>
  )
}

export default PokemonDetails