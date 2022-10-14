import React from 'react'
import { ReactComponent as FilterIcon  } from '../../assets/icons/filter_icon.svg'
import './filterButton.css'

const FilterButton = () => {
  return (
    <button type="button" className='filterButtonMobile'>
      <FilterIcon />
    </button>  
  )
}

export default FilterButton