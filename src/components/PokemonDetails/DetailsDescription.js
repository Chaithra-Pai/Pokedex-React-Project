import React from 'react'
import ChildModal from '../Modal/ChildModal'
import './css/DetailsDescription.css'

const DetailsDescription = ({ pokemonDescription, id }) => {

    let description = pokemonDescription?.flavor_text_entries?.reduce((descriptionArr, currentVal) => {
        if( currentVal?.language?.name === 'en' ){
            descriptionArr = [...descriptionArr, currentVal?.flavor_text ]
        }
        return descriptionArr;
    },[])
    
    description = [...new Set(description)].join('').trim()

    return (
    <div className='detailsDescription'>
        <p>
            { description }
        </p>
        <ChildModal id={id} description={description}/>
    </div>
  )
}

export default DetailsDescription