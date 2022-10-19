import React, { useEffect, useState } from 'react'
import './css/PokemonDetails.css'

import PokemonDetailsImgCard from './PokemonDetailsImgCard'
import DetailsHeaderDesktop from './DetailsHeaderDesktop'
import DetailsHeaderMobile from './DetailsHeaderMobile'
import DetailsDescription from './DetailsDescription'
import DetailsFooter from './DetailsFooter'

import { useSelector, useDispatch } from 'react-redux'
import { getPokemonDetailsObject } from '../../redux/selector/pokemonDetailsSelector'
import {
  fetchPokemonDetailsApiCall,
  fetchPokemonDescriptionApiCall,
  clearPokemonDetails
} from '../../redux/actionContainer/actionCreators/pokemonDetailsActionCreators'


const PokemonDetails = ({ handleClose, id }) => {
  const dispatch = useDispatch();
  const { pokemonDetailsResponse, pokemonDescription } =useSelector(getPokemonDetailsObject)
  const [pokemonDetails,setPokemonDetails] = useState([])
  console.log(pokemonDetailsResponse);

  useEffect(() => {
    dispatch(fetchPokemonDetailsApiCall(id))
    dispatch(fetchPokemonDescriptionApiCall(id))
    return () => dispatch(clearPokemonDetails())
  }, [])

  useEffect(()=>{
    setPokemonDetails(pokemonDetailsResponse)
  },[pokemonDetailsResponse])

  return (
    <div className='pokemonDetailsContainer'>
        <DetailsHeaderMobile handleClose={handleClose}/>
        <div className='pokemonContainer2'>
            <PokemonDetailsImgCard/>
            <div>
                <DetailsHeaderDesktop handleClose={handleClose}/>
                <DetailsDescription />
            </div>
        </div> 
        <DetailsFooter />
    </div>
  )
}

export default PokemonDetails