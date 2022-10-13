import React from 'react'
import { ReactComponent as FilterIcon  } from '../../assets/icons/filter_icon.svg'
import './Button.css'

const Button = () => {
  return (
    <button type="button" className='filterButtonMobile'>
      <FilterIcon />
    </button>  
  )
}

export default Button