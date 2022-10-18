import React from 'react'
import DetailsDescription from './DetailsDescription'
import DetailsHeaderDesktop from './DetailsHeaderDesktop'
import DetailsHeaderMobile from './DetailsHeaderMobile'
import PokemonDetailsImgCard from './PokemonDetailsImgCard'
import './css/DetailsContainer.css'

const DetailsContainer = ({handleClose}) => {
  return (
    <>
        <DetailsHeaderMobile handleClose={handleClose}/>
        <div className='pokemonContainer2'>
            <PokemonDetailsImgCard/>
            <div>
                <DetailsHeaderDesktop handleClose={handleClose}/>
                <DetailsDescription />
            </div>
        </div>        
    </>
  )
}

export default DetailsContainer