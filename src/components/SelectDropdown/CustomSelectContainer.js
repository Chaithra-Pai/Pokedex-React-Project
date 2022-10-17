import React from 'react'
import SelectCustom from './SelectDropdown'
import colourOptions from '../../sampleData.js'
import './customSelectContainer.css'

const CustomSelectContainer = () => {
  return (
    // <div style='position: relative'>
    <div className='filterButtonDesktop'>
        <SelectCustom options={colourOptions} label='Type'/>  
        <SelectCustom options={colourOptions} label='Gender'/> 
        <SelectCustom options={colourOptions} label='Stat'/> 
    </div>
    // </div>
  )
}

export default CustomSelectContainer