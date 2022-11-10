import React from 'react'
import { ReactComponent as FilterIcon  } from '../../assets/icons/filter_icon.svg'
import './css/filterButton.css'

const FilterButton = ( {handleModal} ) => {
  return (
    <button type="button" className='filterButtonMobile' onClick={handleModal}>
      <FilterIcon />
    </button>  
  )
}

export default FilterButton