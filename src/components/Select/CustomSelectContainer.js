import React from 'react'
import SelectCustom from './SelectCustom'
import colourOptions from '../../sampleData.js'
import './CustomSelectContainer.css'

const CustomSelectContainer = () => {
  return (
    <div className='filterButtonDesktop'>
        <SelectCustom options={colourOptions} label='Type'/>  
        <SelectCustom options={colourOptions} label='Gender'/> 
        <SelectCustom options={colourOptions} label='Stat'/> 
    </div>
  )
}

export default CustomSelectContainer