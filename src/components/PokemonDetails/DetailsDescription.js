import React from 'react'
import './css/DetailsDescription.css'

const DetailsDescription = ({ pokemonDescription }) => {

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
        <button className='readMoreText'>Read more...</button>
    </div>
  )
}

export default DetailsDescription